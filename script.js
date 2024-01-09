function getComputerChoice(options) {
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

let options = ["Rock", "Paper", "Scissors"];