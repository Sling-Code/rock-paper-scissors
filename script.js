//Game
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
};

let options = ["rock", "paper", "scissors"];
let result = ""
let playerScore = 0;
let computerScore = 0;

//grabs a choice from the player and the computer and determine win, lose, or draw and keeps score
function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") 
    || (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")
    || (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
        result = "You Won the Round!";
        playerScore++;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result = "It's a Draw!";
    } else {
        result = "You Lost the Round!";
        computerScore++;
    }

    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;

    checkWinner();
}

function checkWinner() {
    if (playerScore === 5) {
        result = 'You Won the Game';
        updateResultDisplay(true);
        resetGame();
    } else if (computerScore === 5) {
        result = 'You Lost the Game';
        updateResultDisplay(false);
        resetGame();
    }
}

function resetGame() {
    resultDisplay.textContent = result;

    setTimeout(() => { // Delay the reset for a better user experience
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
        resultDisplay.style.color = ""; // Reset color to default
        result= 'Play Again'
        resultDisplay.textContent = result;
    }, 3000);
}

// Function to update the style of resultDisplay based on the winner
function updateResultDisplay(playerWon) {
    if (playerWon) {
        resultDisplay.style.color = "green"; // Set color to green for player win
    } else {
        resultDisplay.style.color = "red"; // Set color to red for player loss
    }
}

//UI
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
scissorBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));



//gets input from the user and computer and plays through five iterations of the playRound function
/*
function game() {
    for (i = 1 ; i >= 0 ; i++) {
    let playerSelection = prompt('Choose rock, paper, or scissors');
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
*/