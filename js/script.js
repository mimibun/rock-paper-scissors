let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function getPlayerChoice() { 
    while (true) {
        let playerRawInput =  prompt("Rock...paper...scissors: What is your hand? ").toLowerCase();
        console.log("raw player: " + playerRawInput);

        switch (playerRawInput) {
            case "rock":
                return "Rock";
            case "paper":
                return "Paper";
            case "scissors":
                return "Scissors";
            default:
                continue;
        }
    }
}

console.log("player: " + getPlayerChoice());

console.log("pomputer: " + getComputerChoice());