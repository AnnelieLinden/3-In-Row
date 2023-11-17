const newPlayer = document.querySelector('#newPlayer')
const text = document.querySelector('#text')
document.querySelector('#button').addEventListener('click', addPlayer);
const tempPlayers = localStorage.getItem("players")
const players = tempPlayers ? JSON.parse(tempPlayers) : [];

function addPlayer() {
  const playerName = document.getElementById('playername').value
  const matches = JSON.parse(localStorage.getItem("matches"))
  //newPlayer.innerText="Skriv ett namn att lägga till:"
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
    text.textContent= "Det finns redan en användare med de namnet. "
    document.body.appendChild(text)
  }
  localStorage.setItem("players", JSON.stringify(players)) 
}

