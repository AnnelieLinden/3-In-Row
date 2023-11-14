const gameboard = document.querySelector('#gameboard')
const info = document.querySelector('#info')
const playerDrop1 = document.querySelector('#playerdrop1')
const playerDrop2 = document.querySelector('#playerdrop2')

const startCells = ["", "", "", "", "", "", "", "", ""]
let playerTurn = 1;
let go = "circle"
info.textContent = "Cirkel börjar"
const matches = []


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

function choosePlayers() {
  const players = JSON.parse(localStorage.getItem("players"))
  const form1 = document.createElement('form');
  const opponent1 = document.createElement('select')
  form1.setAttribute('id','playerDrop1');
  opponent1.setAttribute('id','playerSelect1');
  players.forEach(player => {
    const option = document.createElement('option');
    option.value = player.toLowerCase();
    option.textContent = player;
    opponent1.appendChild(option);
  });
  const submit1 = document.createElement('input');
  submit1.setAttribute('type', 'submit');
  submit1.value = 'Välj';
  form1.appendChild(opponent1);
  form1.appendChild(submit1);
  document.body.appendChild(form1) 
  form1.addEventListener('submit', function (event) {
    event.preventDefault();
    console.dir(opponent1)
    console.log(opponent1.selectedIndex);
    const chosenCircle = opponent1.options[opponent1.selectedIndex].value
  });  
//_____________________________________________________________
  const form2 = document.createElement('form');  
  const opponent2 = document.createElement('select')
  form2.setAttribute('id', 'playerDrop2');
  opponent2.setAttribute('id', 'playerSelect2');
  players.forEach(player => {
    const option = document.createElement('option');
    option.value = player.toLowerCase();
    option.textContent = player;
    opponent2.appendChild(option);
  });
  const submit2 = document.createElement('input');
  submit2.setAttribute('type', 'submit');
  submit2.value = 'Välj';
  form2.appendChild(opponent2);
  form2.appendChild(submit2);
  document.body.appendChild(form2)
  form2.addEventListener('submit', function (event) {
    event.preventDefault();
    console.dir(opponent2)
    console.log(opponent2.selectedIndex);
    const chosenCross = opponent2.options[opponent2.selectedIndex].value
  });
}
choosePlayers()



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
  for (i = 0; i < allSquares.length; i++) {
    if (allSquares[i].firstChild?.classList.contains(go)) {
      count += 1;
    }
  }
  return count <= 3
}

function checkScore() {
  const allSquares = document.querySelectorAll('.square')
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  const match = {}; 
  winningCombos.forEach(array => {
    const circleWins = array.every(cell =>
      allSquares[cell].firstChild?.classList.contains('circle'))
    if (circleWins) {
      info.textContent ="Cirkel Vann!"
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
    }
  })
  winningCombos.forEach(array => {
    const crossWins = array.every(cell =>
      allSquares[cell].firstChild?.classList.contains('cross'))
    if (crossWins) {
      info.textContent ="Kryss Vann!"
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    }
  })

  matches.push(match)
  localStorage.setItem("matches", JSON.stringify(matches));
}



