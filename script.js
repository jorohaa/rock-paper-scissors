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

console.log(getComputerChoice());