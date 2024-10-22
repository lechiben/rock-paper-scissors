let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = `Human chose: ${humanChoice}<br>Computer chose: ${computerChoice}<br><br>`;

    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!<br>";
    } else {
        const winningCombo = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        if (winningCombo[humanChoice] === computerChoice) {
            resultMessage += `You win! ${humanChoice} beats ${computerChoice}<br>`;
            humanScore++;
        } else {
            resultMessage += `Computer wins! ${computerChoice} beats ${humanChoice}<br>`;
            computerScore++;
        }
    }

    resultMessage += `<br>Current Scores:<br>Human: ${humanScore}<br>Computer: ${computerScore}`;
    document.getElementById('result').innerHTML = resultMessage;
    document.getElementById('score').innerHTML = `Human: ${humanScore} | Computer: ${computerScore}`;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        let finalMessage = (humanScore > computerScore) 
            ? "Congratulations! You won the game!"
            : "Computer wins the game! Better luck next time!";
        
        document.getElementById('result').innerHTML = finalMessage;
        
        // Disable buttons after game ends
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;

        // Ask the user if they want to play another round
        setTimeout(() => {
            if (confirm("Do you want to play another round?")) {
                resetGame();
            }
        }, 500);
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('result').innerHTML = "Let's start a new game!";
    document.getElementById('score').innerHTML = `Human: ${humanScore} | Computer: ${computerScore}`;
    
    // Re-enable buttons for a new game
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));