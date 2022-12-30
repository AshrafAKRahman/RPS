let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

rockButton.addEventListener("click", () => play("rock"));
paperButton.addEventListener("click", () => play("paper"));
scissorsButton.addEventListener("click", () => play("scissors"));

function play(humanChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();

  // Determine the result
  let result;
  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    humanScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }

  // Display the result
  document.getElementById("result").innerHTML = `You chose ${humanChoice}, the computer chose ${computerChoice}. ${result}`;
  document.getElementById("humanScore").innerHTML = humanScore;
  document.getElementById("computerScore").innerHTML = computerScore;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
