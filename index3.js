const newPlayer = document.querySelector('#newPlayer')
const text = document.querySelector('#text')
const allPlayers= document.querySelector('#allPlayers')
document.querySelector('#button').addEventListener('click', addPlayer);
const h5 = document.querySelector('#h5')
h5.textContent = "Välkommen till Annelies Luffarschack! Börja med att skapa spelare. 2-20 tecken."


const tempPlayers = localStorage.getItem("players")
const players = tempPlayers ? JSON.parse(tempPlayers) : [];


function addPlayer() {
  const playerName = document.getElementById('playername').value

  const playerExist = players.some(players =>
    players.Name.toLowerCase() === playerName.toLowerCase());
  if (!playerExist) {
    const player = {
      Name: playerName,
      Score: 0,
    }
    text.textContent = "Spelare tillagd i listan"  

    players.push(player)    
  } else {
    text.textContent= "Ogiltligt användarnamn eller användarnamnet finns redan registrerat. "

  }
  localStorage.setItem("players", JSON.stringify(players)) 
}

function showAllPlayers() {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')
  const tr = document.createElement('tr')
  const thName = document.createElement('th')

  table.appendChild(thead)
  table.appendChild(tbody)
  allPlayers.appendChild(table)
  tr.appendChild(thName)
  tbody.appendChild(tr)

  thead.innerText = "Alla spelare"
  thName.innerText = "Namn:"
  for (let player of players) {
    const playerRow = document.createElement('tr')
    const playerName = document.createElement('td')
    const playerScore = document.createElement('td')
    playerName.innerText = player.Name

    playerRow.appendChild(playerName)
    playerRow.appendChild(playerScore)
    tbody.appendChild(playerRow)
  }
}
showAllPlayers()