let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    if (playerSelection === null) {
        return;
    }
    computerSelection = getComputerChoice();

    const gameText = document.querySelector('.game-text');
    gameText.setAttribute('style', 'white-space: pre;');

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        gameText.textContent = 'YOU WIN THE ROUND.'
        gameText.textContent += `Score: ${playerScore} : ${computerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        gameText.textContent = 'YOU LOSE THE ROUND.'
        gameText.textContent += `SCORE: ${playerScore} : ${computerScore}`;

    } else if (playerSelection === computerSelection) {
        gameText.textContent = 'IT\'S A DRAW.';
        gameText.textContent += `Score: ${playerScore} : ${computerScore}`;
    } else {
        return ('Only Rock, Paper or Scissors are allowed!');
    }
}

function game() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => {
           const playerSelection = event.target.className;
           const computerChoice = getComputerChoice();
           playRound(playerSelection, computerChoice);

           if (playerScore === 5) {
               console.log("You won the game!");
           } else if (computerScore === 5) {
               console.log("You lost the game!");
           }
        })
    });
}


game();
