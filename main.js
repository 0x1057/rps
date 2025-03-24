function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    console.log("Let's play Rock, Paper, Scissors!");

    function playRound(humanChoice, computerChoice) {
        let humanInsensitive = humanChoice.toLowerCase();
        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                return "Tie!";
            } else if (computerChoice == "paper") {
                computerScore++;
                return "You Lose! Paper beats Rock!";
            } else {
                humanScore++;
                return "You Win! Rock beats Scissors!";
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                humanScore++;
                return "You Win! Paper beats Rock!";
            } else if (computerChoice == "paper") {
                return "Tie!";
            } else {
                computerScore++;
                return "You Lose! Scissors beats Paper!";
            }
        } else {
            if (computerChoice == "rock") {
                computerScore++;
                return "You Lose! Rock beats Scissors!";
            } else if (computerChoice == "paper") {
                humanScore++;
                return "You Win! Scissors beats Paper!";
            } else {
                return "Tie!";
            }
        }
    }

    while (rounds < 5) {
        console.log(`Round ${rounds + 1}! FIGHT!\n`)
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(playRound(humanChoice, computerChoice));

        rounds++;
    }

    if (humanScore > computerScore) {
        console.log("You Win!!!");
    } else if (computerScore > humanScore) {
        console.log("The computer won. Better luck next time!");
    } else {
        console.log("The game was a tie!");
    }
}



function getComputerChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice == 1) {
        return rock;
    } else if (choice == 2) {
        return paper;
    } else {
        return scissors;
    }
}

function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper, or Scissors!");
    return choice;
}

playGame();