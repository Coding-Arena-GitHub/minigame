const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getUserChoice() {
  return new Promise((resolve) => {
    readline.question("Enter rock, paper, or scissors: ", (choice) => {
      if (!['rock', 'paper', 'scissors'].includes(choice)) {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
        resolve(getUserChoice()); // Recursive call to get a valid input
      } else {
        resolve(choice);
      }
    });
  });
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

async function playGame() {
  const userChoice = await getUserChoice();
  const computerChoice = getComputerChoice();
  console.log(`Computer chose ${computerChoice}`);
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);

  if (result === "You win!") {
    playerScore += 1;
  } else if (result === "Computer wins!") {
    computerScore += 1;
  }

  readline.question("Do you want to play again? (yes/no): ", (playAgain) => {
    if (playAgain === "yes") {
      playGame();
    } else {
      console.log(`Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);
      readline.close();
    }
  });
}

playGame();