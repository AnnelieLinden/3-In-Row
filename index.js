const gameboard = document.querySelector('#gameboard')
const info = document.querySelector('#info')
const dropDownArea=document.querySelector('#dropDownArea')
const playerDrop1 = document.querySelector('#playerdrop1')
const playerDrop2 = document.querySelector('#playerdrop2')


let circleName = "";
let crossName = "";
const startCells = ["", "", "", "", "", "", "", "", ""]
let playerTurn = 1;
let go = "circle"
let round = 1;
info.textContent = "Cirkel börjar";
const tempMatches = localStorage.getItem("matches")
const matches = tempMatches ? JSON.parse(tempMatches) : [];

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
  const label1 = document.createElement('label')  
  const opponent1 = document.createElement('select')
  form1.setAttribute('id','playerDrop1');
  opponent1.setAttribute('id','playerSelect1');
  players.forEach(player => {
    const option = document.createElement('option');
    option.value = player.Name;
    option.textContent = player.Name;
    opponent1.appendChild(option);
  });
  const submit1 = document.createElement('input');
  submit1.setAttribute('type', 'submit');
  submit1.value = 'Välj';
  form1.appendChild(label1)
  label1.innerText = "Cirkel: "
  form1.appendChild(opponent1);
  form1.appendChild(submit1);
  dropDownArea.appendChild(form1) 
 

  form1.addEventListener('submit', function (event) {
    event.preventDefault();
    console.dir(opponent1)
    console.log(opponent1.selectedIndex);
    circleName = opponent1.options[opponent1.selectedIndex].value
  });  
//____________dropdown2_________________________________________________
  const form2 = document.createElement('form'); 
  const label2 = document.createElement('label')  
  const opponent2 = document.createElement('select')
  form2.setAttribute('id', 'playerDrop2');
  opponent2.setAttribute('id', 'playerSelect2');
  players.forEach(player => {
    const option = document.createElement('option');
    option.value = player.Name;
    option.textContent = player.Name;
    opponent2.appendChild(option);
  });
  const submit2 = document.createElement('input');
  submit2.setAttribute('type', 'submit');
  submit2.value = 'Välj';
  form2.appendChild(label2)
  label2.innerText = "Kryss: "
  form2.appendChild(opponent2);
  form2.appendChild(submit2);
  dropDownArea.appendChild(form2)

  form2.addEventListener('submit', function (event) {
    event.preventDefault();
    console.dir(opponent2)
    console.log(opponent2.selectedIndex);
    crossName = opponent2.options[opponent2.selectedIndex].value
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
    round+=0.5
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
  
  winningCombos.forEach(array => {
    const circleWins = array.every(cell =>
      allSquares[cell].firstChild?.classList.contains('circle'))
    if (circleWins) {
      info.textContent = circleName + " vann!"
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      const match = {
        winner: circleName,
        loser: crossName,
        rounds: round,
      }; 
      matches.push(match)
      localStorage.setItem("matches", JSON.stringify(matches));
      const players = JSON.parse(localStorage.getItem("players"))
      const found = players.find((player) => player.Name === circleName);
      found.Score += 1;
      localStorage.setItem("players", JSON.stringify(players));
    }
  })
  winningCombos.forEach(array => {

    const crossWins = array.every(cell =>
      allSquares[cell].firstChild?.classList.contains('cross'))
    if (crossWins) {
      info.textContent = crossName + " vann!"
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      const match = {
        winner: crossName,
        loser: circleName,
        rounds: round,
      };
      matches.push(match)
      localStorage.setItem("matches", JSON.stringify(matches));
      const players = JSON.parse(localStorage.getItem("players"))
      const found = players.find((player) => player.Name === crossName);
      found.Score += 1;
      localStorage.setItem("players", JSON.stringify(players));
      return
    }
  })
}

