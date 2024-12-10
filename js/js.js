const computerChoiceDisplay = document.getElementById('enemy-attack')
const userChoiceDisplay = document.getElementById('player-attack')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
// userChoiceDisplay.innerHTML = userChoice
if(userChoice == "rock"){
    document.getElementById("p-attack").src = "img/magic-rock.png";
} else if(userChoice == "paper"){
    document.getElementById("p-attack").src = "img/magic-paper.png";
} else {
    document.getElementById("p-attack").src = "img/kill-la-kill-scissors.png";
}
generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1

    if(randomNumber === 1){
        computerChoice = 'rock'
        document.getElementById("w-attack").src = "img/magic-rock.png";
    }

    if(randomNumber === 2){
        computerChoice = 'scissors'
        document.getElementById("w-attack").src = "img/kill-la-kill-scissors.png";
    }

    if(randomNumber === 3){
        computerChoice = 'paper'
        document.getElementById("w-attack").src = "img/magic-paper.png";
    }
  
    console.log(randomNumber);
}



