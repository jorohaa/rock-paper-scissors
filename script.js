let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
    let choice = Math.random() * 100;

    if (choice >= 0 && choice <= 33.34) {
        return "rock";
    }
    else if (choice > 33.34 && choice <= 66.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    choice = String(choice).toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let humanWin = `You win! ${humanChoice} beats ${computerChoice}.`;
    let computerWin = `You lose! ${computerChoice} beats ${humanChoice}.`;
    let tie = `It's a tie! Both chose ${humanChoice}.`;

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                ++computerScore;
                return computerWin;
            }
            else if (computerChoice === "scissors") {
                ++humanScore;
                return humanWin;
            } else {
                return tie;
            }
        case "paper":
            if (computerChoice === "scissors") {
                ++computerScore;
                return computerWin;
            }
            else if (computerChoice === "rock") {
                ++humanScore;
                return humanWin;
            } else {
                return tie;
            }
        case "scissors":
            if (computerChoice === "rock") {
                ++computerScore;
                return computerWin;
            }
            else if (computerChoice === "paper") {
                ++humanScore;
                return humanWin;
            } else {
                return tie;
            }
    }
}

function playGame() {
    let humanChoice;
    let computerChoice;

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Human score: ${humanScore}, computer score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Game over - Human won!");
    } else if (humanScore < computerScore) {
        console.log("Game over - Computer won!");
    } else {
        console.log("Game over - It's a tie!");
    }
}