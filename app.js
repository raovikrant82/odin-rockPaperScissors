let userScore = 0;
let computerScore = 0;

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
}

function userPlay() {
  let userSelection = prompt("Type (Rock, Paper or Scissors): ");
  userSelection = userSelection.toLowerCase();
  return userSelection;
}

function playRound(playerSelection, computerSelection) {
  let resultStr = "";
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      resultStr = "You Win! Rock beats scissors.";
      userScore++;
    } else if (computerSelection === "paper") {
      resultStr = "You LOSE! Paper beats Rock.";
      computerScore++;
    } else {
      resultStr = "It's a tie.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      resultStr = "You Win! Paper beats Rock.";
      userScore++;
    } else if (computerSelection === "scissors") {
      resultStr = "You LOSE! Scissors beats paper.";
      computerScore++;
    } else {
      resultStr = "It's a tie.";
    }
  } else {
    if (computerSelection === "scissors") {
      resultStr = "You Win! Scissors beats Paper.";
      userScore++;
    } else if (computerSelection === "rock") {
      resultStr = "You LOSE! Rock beats Scissors.";
      computerScore++;
    } else {
      resultStr = "It's a tie.";
    }
  }
  return resultStr;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(userPlay(), computerPlay()));
    let scoreDisplay = `${userScore} : ${computerScore}`;
    console.log(scoreDisplay);
  }
}
console.log(game());
