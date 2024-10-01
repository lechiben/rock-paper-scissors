function getComputerChoice(){
    const randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    while (true){
        // Let user enter their choice
        let choice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();

        // Check if the choice is valid
        if (choice === "rock" || choice === "paper" || choice === "scissors"){
            return choice;
        } else {
            alert("Invalid choice. Please enter rock, paper or scissors.");
        }
    }
}

var humanScore = 0;
var computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice){
    

} 