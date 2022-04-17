const choices = document.querySelectorAll(".btn");
const userFlashDisplay = document.getElementById("user-flash");
const computerFlashDisplay = document.getElementById("computer-flash");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result-container");

let computerChoice;
let userChoice;
let result;

let userScore = 0;
let computerScore = 0;
let leadScore = 0;

function userPlay(items) {
  items.forEach((item) =>
    item.addEventListener("click", (e) => {
      userChoice = e.target.innerText.toUpperCase();
      userFlashDisplay.innerText = userChoice;
      computerPlay();
      playRound(userChoice, computerChoice);
    })
  );
}
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomNumber];
  computerChoice = computerChoice.innerText.toUpperCase();
  computerFlashDisplay.innerText = computerChoice;
}

function playRound(user, computer) {
  if (user === computer) {
    result = "It's a tie!";
  } else if (user === "ROCK") {
    if (computer === "SCISSORS") {
      userScore++;
      result = "You Won! Rock beats Scissors.";
    } else {
      computerScore++;
      result = "You Lost! Scissors beat Rock.";
    }
  } else if (user === "SCISSORS") {
    if (computer === "PAPER") {
      userScore++;
      result = "You Won! Scissors beat Paper.";
    } else {
      computerScore++;
      result = "You Lost! Paper beats Scissors.";
    }
  } else if (user === "PAPER") {
    if (computer === "ROCK") {
      userScore++;
      result = "You Won! Paper beats Rock.";
    } else {
      computerScore++;
      result = "You Lost! Rock beats Paper.";
    }
  }
  if (userScore > computerScore) {
    leadScore = userScore;
  } else {
    leadScore = computerScore;
  }

  resultDisplay.innerText = result;
  userScoreDisplay.innerText = userScore;
  computerScoreDisplay.innerText = computerScore;
}

userPlay(choices);
// function startGame() {
//   if (leadScore === 5) {
//     if (leadScore === userScore) {
//       result = `You have defeated a bot - WINNER.`;
//     } else {
//       result = `Bot has defeated you - LOOSER.`;
//     }
//   } else {
//     userPlay(choices);
//   }
// }

// startGame();
