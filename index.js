const gameboard = document.querySelector('#gameboard')
const info = document.querySelector('#info')
const scoreboard = document.querySelector('#scoreboard')
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
//if () {  }

//kolla classList på event.target.
//Finns det kryss eller cirkel.
//är den samma som spelarens? plocka bort den, byt inte tur förens 
//hen lagt sitt kryss eller cirkel på annan ruta.
function addGo(event) {
  const goDisplay = document.createElement('div')
  goDisplay.classList.add(go)
  event.target.append(goDisplay)
  //först efter nya funktionen
  go = go === "circle" ? "cross" : "circle"
  info.textContent = "Nu är det " + go + "."
  event.target.removeEventListener('click', addGo)
  checkScore()
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
/*createPlayer() {
  const newPlayer = 
}*/