let playerWins = 0
let playerLosses = 0
let draws = 0

function updateScores() {
  document.getElementById('wins').innerHTML = playerWins
  document.getElementById('losses').innerHTML = playerLosses
  document.getElementById('draws').innerHTML = draws
}

function play() {
  const choices = 'RPS'
  const randomNumber = Math.floor(Math.random() * choices.length)
  const computersValue = choices.charAt(randomNumber)
  const playersValue = prompt('Enter R, P or S')
  if (playersValue === 'R') {
    if (computersValue === 'R') {
      draws++
    }
    if (computersValue === 'P') {
      playerLosses++
    }
    if (computersValue === 'S') {
      playerWins++
    }
  }
  if (playersValue === 'P') {
    if (computersValue === 'P') {
      draws++
    }
    if (computersValue === 'S') {
      playerLosses++
    }
    if (computersValue === 'R') {
      playerWins++
    }
  }
  if (playersValue === 'S') {
    if (computersValue === 'S') {
      draws++
    }
    if (computersValue === 'R') {
      playerLosses++
    }
    if (computersValue === 'P') {
      playerWins++
    }
  }
  updateScores()
  alert('Computer chose ' + computersValue)
}