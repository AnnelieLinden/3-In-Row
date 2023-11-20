const newPlayer = document.querySelector('#newPlayer')
const text = document.querySelector('#text')
document.querySelector('#button').addEventListener('click', addPlayer);
const h5 = document.querySelector('#h5')
h5.textContent = "Välkommen till Annelies Luffarschack! Börja med att skapa spelare. 2-20 tecken"
document.body.appendChild(h5)

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
    document.body.appendChild(text) 
    players.push(player)    
  } else {
    text.textContent= "Ogiltligt användarnamn eller användarnamnet finns redan registrerat. "
    document.body.appendChild(text)
  }
  localStorage.setItem("players", JSON.stringify(players)) 
}

