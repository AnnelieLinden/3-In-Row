//const players = require('./players.json')
//const fs = require('fs')
const newPlayer = document.querySelector('#newPlayer')
const text = document.querySelector('#text')
function addPlayer() {
  const players = [
    {
      Name: playerName,
      Score: 0,
    }
  ]
  const form = document.newPlayer.createElement('form')
  const label = document.newPlayer.createElement('label')
  const type = document.newPlayer.createElement('type')
  const enter = document.newPlayer.createElement('type')
  console.log("hej")
  text.textContent = "Skriv ditt namn eller alias."
  //const playerName = Hur tar man emot input??
  newPlayer.append(form)
  newPlayer.append(label)
  newPlayer.append(type)
  newPlayer.append(enter)
  
  /*fs.writeFile(`./players.json`, JSON.stringify(players, null, 2), (err) => {
    if (err) throw err;
    console.log('Ditt resultat har sparats');
  })*/
}
addPlayer()