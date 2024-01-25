function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
};

let options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

//grabs a choice from the player and the computer and determine win, lose, or draw and keeps score
function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") 
    || (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")
    || (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
        console.log("You Won the Round!");
        playerScore++;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("It's a Draw!");
    } else {
        console.log("You Lost the Round!");
        computerScore++;
    }
}

//gets input from the user and computer and plays through five iterations of the playRound function
function game() {
    for (i = 1 ; i >= 0 ; i++) {
    let playerSelection;
    let computerSelection = getComputerChoice();    
    console.log(playerSelection, computerSelection)

    result = playRound(playerSelection, computerSelection);    
    }
}  

game();

//tallies up wins and losses and announces the result
function final() {
    if (playerScore > computerScore) {
        console.log("You Won the Game!");
    } else if (playerScore === computerScore) {
        console.log("It's a Tie!");
    } else if (playerScore < computerScore) {
        console.log("You Lost the Game!")
    }
}

final();

//UI
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');

rockBtn.addEventListener(click, () => playRound('rock', computerSelection));
paperBtn.addEventListener(click, () => playRound('paper', computerSelection));
scissorBtn.addEventListener(click, () => playRound('scissors', computerSelection));