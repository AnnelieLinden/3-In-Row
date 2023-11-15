const scoreboard = document.querySelector('#scoreboard')
const leaderboard = document.querySelector('#leaderboard')
const playerHistory = document.querySelector('#playerHistory')


function scores() {
  const matches = JSON.parse(localStorage.getItem("matches"))
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')
  const thWinner = document.createElement('th')
  const thLoser = document.createElement('th')
  const thRounds = document.createElement('th')

  
  table.appendChild(thead)
  //syns inte
  table.appendChild(tbody)
  scoreboard.appendChild(table)

  thead.innerText = "Match historik:"
  thWinner.innerText = "Vinnaren:"
  thLoser.innerText = "Förloraren: "
  thRounds.innerText = "Rundor: "
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
  select.setAttribute('id', 'playerSelect');
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
  label.innerText = "Kryss: "
  form.appendChild(select);
  form.appendChild(submit);
  playerHistory.appendChild(form)

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.dir(select)
    console.log(select.selectedIndex);
    const chosenPlayer = select.options[select.selectedIndex].value
  });
  for (let match of matches) {
    //Söka efter chosenPlayer i varje match. 
  }
}

function leading() {
  const players = JSON.parse(localStorage.getItem("players"))
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')
  const thName = document.createElement('th')
  const thScore = document.createElement('th')

  table.appendChild(thead)
  table.appendChild(tbody)
  leaderboard.appendChild(table)

  thead.innerText = "Ledande spelare:"
  //syns inte
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