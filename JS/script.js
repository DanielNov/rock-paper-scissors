let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;
const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}


function playRound(playerSelection, computerSelection) {
    selection = prompt("Choose Rock, Paper or Scissors!", "Rock");
    if (selection === null) {
        return ;
    }
    playerSelection = selection.toLowerCase()
    computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log(`You win the round! ${playerSelection} beats ${computerSelection}`);
        console.log(`Score: ${playerScore} : ${computerScore}`);
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper' || 
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log(`You lose the round! ${computerSelection} beats ${playerSelection}`);
        console.log(`Score: ${playerScore} : ${computerScore}`);

    }

    else if (playerSelection === computerSelection) {
        console.log('It\'s a draw!');
        console.log(`Score: ${playerScore} : ${computerScore}`);
    }

    else {
        return ('Only Rock, Paper or Scissors are allowed!');
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        playRound(playerSelection, computerSelection);
    }


    if (playerScore === 5) {
        console.log("You won the game!");
    }
    else if (computerScore === 5) {
        console.log("You lost the game!");
    }
}


game();
