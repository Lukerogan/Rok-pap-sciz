const computerChoiceDisplay = document.getElementById('enemy-attack')
const userChoiceDisplay = document.getElementById('player-attack')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
}))