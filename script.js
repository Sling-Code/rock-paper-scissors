function getComputerChoice(options) {
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

let options = ["rock", "paper", "scissors"];


let computerSelection = getComputerChoice(["rock", "paper", "scissors"]);


//grabs a choice from the player and the computer and determine win, lose, or draw
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You Won!";
    } else if ( playerSelection === computerSelection) {
        return "It's a Draw!";
    } else {
        return "You Lost!";
    }
}

function game() {
    for (i = 1 ; i <= 5 ; i++) {
    let playerSelection = prompt("Choose Rock, Paper or Scissors");  
    getComputerChoice(options);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerSelection, computerSelection)
    }
}
    
game();