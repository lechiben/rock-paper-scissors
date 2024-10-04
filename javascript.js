function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            alert("Invalid choice. Please enter rock, paper or scissors.");
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let resultMessage = "";
    
    resultMessage += `Human chose: ${humanChoice}\n`;
    resultMessage += `Computer chose: ${computerChoice}\n\n`;
    
    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!\n";
    } else {
        const winningCombo = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        if (winningCombo[humanChoice] === computerChoice) {
            resultMessage += `You win! ${humanChoice} beats ${computerChoice}\n`;
            humanScore++;
        } else {
            resultMessage += `Computer wins! ${computerChoice} beats ${humanChoice}\n`;
            computerScore++;
        }
    }
    
    resultMessage += `\nCurrent Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}`;
    
    // Display the result of this round
    alert(resultMessage);
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        alert(`Round ${i + 1} of ${rounds}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    let finalMessage = `Game Over!\n\n`;
    finalMessage += `Final Scores:\nHuman: ${humanScore}\nComputer: ${computerScore}\n\n`;
    if (humanScore > computerScore) {
        finalMessage += "You win the game!";
    } else if (computerScore > humanScore) {
        finalMessage += "Computer wins the game!";
    } else {
        finalMessage += "It's a tie game!";
    }
    
    // Display the final result
    alert(finalMessage);
}

// Play a 5-round game
playGame(5);