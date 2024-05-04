let computerScore = 0;
let humanScore = 0;


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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a TIE!");
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            humanScore++;
            console.log(`You win! Computer loses! Current score: You:${humanScore} - Computer:${computerScore}`)
        } else {
            computerScore++;
            console.log(`You lose(lol what a loser, lol get rekt noob)! Computer wins! Current score: You:${humanScore} - Computer:${computerScore}`)
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore++;
            console.log(`You win! (Crazy! you really showed him, good job uwu) Computer loses! Current score: You:${humanScore} - Computer:${computerScore}`)
        } else {
            computerScore++;
            console.log(`I'm sorry to have to inform you, but unfortunately you lost this round :c Better luck next time! Computer wins! Current score: You:${humanScore} - Computer:${computerScore}`)
        }
    } else {
        if (computerChoice === "Paper") {
            humanScore++;
            console.log(`Me thinkies you won uwu! Computer loses! Current score: You:${humanScore} - Computer:${computerScore}`)
        } else {
            computerScore++;
            console.log(`take the L + ratio + sit + who asked + bozo! Computer wins! Current score: You:${humanScore} - Computer:${computerScore}`)
        }
    }
}

for (i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
}
console.log(`Final score: You:${humanScore} - Computer:${computerScore}`)