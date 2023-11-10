fetch('players.json')


const gameboard = document.querySelector('#gameboard')
const info = document.querySelector('#info')

const startCells = ["", "", "", "", "", "", "", "", ""]
let playerTurn = 1;
let go = "circle"
info.textContent = "Cirkel börjar"



function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement('div')
    cellElement.classList.add('square')
    cellElement.id = index
    cellElement.addEventListener('click', addGo)
    gameboard.append(cellElement)
  })
}
createBoard()

function addGo(event) {
  if (isAllowedToPlace() && event.currentTarget.firstChild == null) {
  const goDisplay = document.createElement('div')
  goDisplay.classList.add(go)
  event.currentTarget.append(goDisplay)
  go = go === "circle" ? "cross" : "circle"
  info.textContent = "Nu är det " + go + "."
  checkScore() 
    
  } else if (!isAllowedToPlace() && event.currentTarget.firstChild?.classList.contains(go)) {
      info.textContent = "Nu är det " + go + "s tur. Flytta en pjäs."
      event.currentTarget.firstChild.remove()
  } 
}
function isAllowedToPlace() {
  let count = 1;
  const allSquares = document.querySelectorAll('.square')
  for (i = 0; i < allSquares.length; i++){
    if (allSquares[i].firstChild?.classList.contains(go)) {
      count += 1;
    }
  }
  return count<=3
}
function checkScore() {
  const allSquares = document.querySelectorAll('.square')
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  winningCombos.forEach(array => {
    const circleWins = array.every(cell =>
      allSquares[cell].firstChild?.classList.contains('circle'))
    if (circleWins) {
      info.textContent = "Cirkel Vann!"
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    }
  })
  winningCombos.forEach(array => {
    const crossWins = array.every(cell =>
      allSquares[cell].firstChild?.classList.contains('cross'))
    if (crossWins) {
      info.textContent = "Kryss Vann!"
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    }
  })
}

