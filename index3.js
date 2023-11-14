const newPlayer = document.querySelector('#newPlayer')
const text = document.querySelector('#text')
document.querySelector('#button').addEventListener('click', addPlayer);


const players = !!localStorage.getItem("players") ? JSON.parse(localStorage.getItem("players")) : [];
console.log(players)
function addPlayer() {
  //event.preventDefault();   
  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    const playerName = document.getElementById('playername').value;
    const player = {
      Name: playerName,
      Score: 0,
    }
    players.push(player)
    localStorage.setItem("players", JSON.stringify(players));
  });
}
//

addPlayer()
/**/



//playerList= forms input type radio
