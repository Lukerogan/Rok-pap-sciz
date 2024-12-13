const computerChoiceDisplay = document.getElementById('enemy-attack')
const userChoiceDisplay = document.getElementById('player-attack')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let count = 1
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    // userChoiceDisplay.innerHTML = userChoice
    if (userChoice == "rock") {
        document.getElementById("p-attack").src = "img/magic-rock.png";
    } else if (userChoice == "paper") {
        document.getElementById("p-attack").src = "img/magic-paper.png";
    } else {
        document.getElementById("p-attack").src = "img/kill-la-kill-scissors.png";
    }
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
        document.getElementById("w-attack").src = "img/magic-rock.png";
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'
        document.getElementById("w-attack").src = "img/kill-la-kill-scissors.png";
    }

    if (randomNumber === 3) {
        computerChoice = 'paper'
        document.getElementById("w-attack").src = "img/magic-paper.png";
    }
}



function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw"
    }
    else if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "you win"
    }
    else if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = "you lose"
    }
    else if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = "you win"
    }
    else if(computerChoice === 'paper' && userChoice === 'rock'){
        result = "you lose"
    }
    else if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = "you win"
    }
    else if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = "you lose"
    }
    resultDisplay.innerHTML = result
    getScore();
}

function getScore(){

if (result == 'you win'){
    count += 1
    document.getElementById('next').style.display = "flex";
} 
else if (result == 'you lose'){
    count = 1
}
else{
    count = count
}

if(count == 1){
    document.getElementById('enemy').src = "img/wiz.png"
    document.getElementById('background').style.backgroundImage = 'url(../img/magic-battle-background.png)';
}
else if(count == 2){
    document.getElementById('enemy').src = "img/ngakau-blake-knight-removebg-preview.png"
    document.getElementById('background').style.backgroundImage = 'url(../img/magical-indoor-battle-background.png)'
    document.getElementById('enemy').style.transform = 'scaleX(+1)'
}
else if(count == 3){
    document.getElementById('enemy').src = 'img/output-onlinegiftools (1).gif'
    document.getElementById('background').style.backgroundImage = 'url(../img/final-boss-magical-battle-background.png)'
}
}
