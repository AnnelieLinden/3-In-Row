const scoreboard = document.querySelector('#scoreboard')
const leaderboard = document.querySelector('#leaderboard')


function scores() {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const trHead = document.createElement('tr')
  const thWinner = document.createElement('th')
  const thLoser = document.createElement('th')
  const thRounds = document.createElement('th')

  thead.innerText="Spelade matcher:"  
  thWinner.innerText ="Vinnaren:"
  thLoser.innerText ="Förloraren:"
  thRounds.innerText="Rundor:"

  trHead.appendChild(thWinner)
  trHead.appendChild(thLoser)
  trHead.appendChild(thRounds)  
  thead.appendChild(trHead)
  table.appendChild(thead)

  scoreboard.appendChild(table)
}
scores()
function leading() {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const trHead = document.createElement('tr')
  const thName = document.createElement('th')
  const thScore = document.createElement('th')

  thead.innerText ="Högst poäng:"
  thName.innerText ="Spelare:"
  thScore.innerText ="Poäng:"

  trHead.appendChild (thName)
  trHead.appendChild(thScore)
  thead.appendChild(trHead)
  table.appendChild(thead)
  leaderboard.appendChild(table)
}
leading()


//För att HÄMTA localstoarage
//JSON.parse(localStorage.getItem("players"))