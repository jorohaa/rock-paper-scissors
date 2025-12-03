// create two score variables humanScore and computerScore
let humanScore = 0;
let computerScore = 0;

// call playGame()
playGame();

// create function getComputerChoice
// create variable choice
// get random number between 0 and 100 and put it in choice
// if number between 0 and 33.33, getComputerChoice returns "rock"
// if number between 33.34 and 66.66, getComputerChoice returns "paper"
// if number between 66.67 and 100, getComputerChoice returns "scissors"
function getComputerChoice() {
    let choice = Math.random() * 100;

    if (choice >= 0 && choice <= 33.33) {
        return "rock";
    }
    else if (choice >= 33.34 && choice <= 66.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// create function getHumanChoice
// create variable choice
// store input from prompt in choice
// convert choice to lowercase
// return choice
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    choice = String(choice).toLowerCase();
    return choice;
}

// create function playRound
// give playRound parameters: humanChoice, computerChoice
// evaluate humanChoice first, then computerChoice
// increment score variable according to winner
// in case humanChoice wins, return "You win! [humanChoice] beats [computerChoice]"
// in case computerChoice wins, return "You lose! [computerChoice] beats [humanChoice]"
// in case it's a tie, return "It's a tie! Both chose [humanChoice]"
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

// create function playGame
// playGame loops playRound 5 times
// --create variables humanChoice and computerChoice
// --humanChoice and computerChoice need to be reassigned with each game
// playGame prints scores at end of each game
// playGame prints winner at the end
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