const scoreboard = document.querySelector('#scoreboard')
const leaderboard = document.querySelector('#leaderboard')
const playerHistory = document.querySelector('#playerHistory')
let wonMatches = [];
let lostMatches = [];

function scores() {
  const matches = JSON.parse(localStorage.getItem("matches"))
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')
  const tr = document.createElement('tr')
  const thWinner = document.createElement('th')
  const thLoser = document.createElement('th')
  const thRounds = document.createElement('th')


  table.appendChild(thead)
  table.appendChild(tbody)
  scoreboard.appendChild(table)
  tr.appendChild(thWinner)
  tr.appendChild(thLoser)
  tr.appendChild(thRounds)
  tbody.appendChild(tr)

  thead.innerText = "Match historik: "
  thWinner.innerText = "Vinnare:"
  thLoser.innerText = "Förlorare:"
  thRounds.innerText = "Rundor:"
  for (let match of matches) {
    const playerRow = document.createElement('tr')
    const winner = document.createElement('td')
    const loser = document.createElement('td')
    const rounds = document.createElement('td')
    winner.innerText = match.winner
    loser.innerText = match.loser
    rounds.innerText = match.rounds
    playerRow.appendChild(winner)
    playerRow.appendChild(loser)
    playerRow.appendChild(rounds)
    tbody.appendChild(playerRow)
  }
}
scores()

function showPlayerHistory() {

  const players = JSON.parse(localStorage.getItem("players"))
  const matches = JSON.parse(localStorage.getItem("matches"))
  const form = document.createElement('form');
  const label = document.createElement('label')
  const select = document.createElement('select')
  form.setAttribute('id', 'playerDrop');
  select.setAttribute('title', 'playerSelect');
  players.forEach(player => {
    const option = document.createElement('option');
    option.value = player.Name;
    option.textContent = player.Name;
    select.appendChild(option);
  });
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.value = 'Välj';
  form.appendChild(label)
  label.innerText = "Sök matchresultat för spelare: "
  form.appendChild(select);
  form.appendChild(submit);
  playerHistory.appendChild(form)

  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')
  const tr = document.createElement('tr')
  const thWinner = document.createElement('th')
  const thLoser = document.createElement('th')
  const thRounds = document.createElement('th')

  table.appendChild(thead)
  table.appendChild(tbody)
  playerHistory.appendChild(table)
  tr.appendChild(thWinner)
  tr.appendChild(thLoser)
  tr.appendChild(thRounds)
  tbody.appendChild(tr)

  thead.innerText = "Match historik: "
  thWinner.innerText = "Vinnare:"
  thLoser.innerText = "Förlorare:"
  thRounds.innerText = "Rundor:"

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    tbody.innerHTML = ""
    const chosenPlayer = select.options[select.selectedIndex].value
    wonMatches = matches.filter((playerMatch) => playerMatch.winner === chosenPlayer)
    lostMatches = matches.filter((playerMatch) => playerMatch.loser === chosenPlayer)

    tr.appendChild(thWinner)
    tr.appendChild(thLoser)
    tr.appendChild(thRounds)
    tbody.appendChild(tr)

    thead.innerText = "Match historik: "
    thWinner.innerText = "Vinnare:"
    thLoser.innerText = "Förlorare:"
    thRounds.innerText = "Rundor:"

    for (let wonMatch of wonMatches) {
      console.log(wonMatch)
      const playerRow = document.createElement('tr')
      const theWinner = document.createElement('td')
      const theLoser = document.createElement('td')
      const countedRounds = document.createElement('td')
      theWinner.innerText = wonMatch.winner
      theLoser.innerText = wonMatch.loser
      countedRounds.innerText = wonMatch.rounds
      playerRow.appendChild(theWinner)
      playerRow.appendChild(theLoser)
      playerRow.appendChild(countedRounds)
      tbody.appendChild(playerRow)
    }
    for (let lostMatch of lostMatches) {
      console.log(lostMatch)
      const playerRow = document.createElement('tr')
      const theWinner = document.createElement('td')
      const theLoser = document.createElement('td')
      const countedRounds = document.createElement('td')
      theWinner.innerText = lostMatch.winner
      theLoser.innerText = lostMatch.loser
      countedRounds.innerText = lostMatch.rounds
      playerRow.appendChild(theWinner)
      playerRow.appendChild(theLoser)
      playerRow.appendChild(countedRounds)
      tbody.appendChild(playerRow)
    }
  });
}
showPlayerHistory()

function choice() {

}
function leading() {
  const players = JSON.parse(localStorage.getItem("players"))
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')
  const tr = document.createElement('tr')
  const thName = document.createElement('th')
  const thScore = document.createElement('th')

  table.appendChild(thead)
  table.appendChild(tbody)
  leaderboard.appendChild(table)
  tr.appendChild(thName)
  tr.appendChild(thScore)
  tbody.appendChild(tr)

  thead.innerText = "Ledande spelare:"
  thName.innerText = "Spelare:"
  thScore.innerText = "Poäng:"

  for (let player of players) {
    const playerRow = document.createElement('tr')
    const playerName = document.createElement('td')
    const playerScore = document.createElement('td')
    playerName.innerText = player.Name
    playerScore.innerText = player.Score


    playerRow.appendChild(playerName)
    playerRow.appendChild(playerScore)
    tbody.appendChild(playerRow)
  }
}
leading()