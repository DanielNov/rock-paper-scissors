const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' 
    || playerSelection === 'scissors' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'rock') {
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper' 
        || playerSelection === 'paper' && computerSelection === 'scissors'
        || playerSelection === 'scissors' && computerSelection === 'rock') {
        return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }

    else if (playerSelection === computerSelection) {
        return ('It\'s a draw!');
    }

    else {
        return ('Only Rock, Paper or Scissors are allowed!');
    }
}



let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose Rock, Paper or Scissors!", "Rock").toLowerCase();
console.log(playRound(playerSelection, computerSelection));