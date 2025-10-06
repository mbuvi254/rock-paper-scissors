let computerChoice; //I use this to store player choice
let playerChoice; //Store Player choice 
let computerScore = 0; //Store Computer score start at zero on page load
let playerScore = 0;

// Generate To Compare to Player Choice Computer Choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play Game - pass Player Choice passed as PlyChoice
function playGame(plyChoice) {
  playerChoice = plyChoice;
  computerChoice = getComputerChoice();

  const computerDisplay = document.getElementById("computerChoice");
  const playerDisplay = document.getElementById("playerChoice");
  const resultDisplay = document.getElementById("gameResult");

  //Holds all our Arrays
  const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
  };

  // Display Choices by Emojis
  computerDisplay.innerHTML = emojis[computerChoice];
  playerDisplay.innerHTML = emojis[playerChoice];

  // Decide Winner 
  if (playerChoice === computerChoice) {
    resultDisplay.textContent = "DRAW";
    resultDisplay.style.background = "#808080";
  } 
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    resultDisplay.textContent = "PLAYER WINS";
    resultDisplay.style.background = "#008000";
  } 
  else {
    computerScore++;
    resultDisplay.textContent = "COMPUTER WINS";
    resultDisplay.style.background = "#FF0000";
  }

  // Update Scoreboard
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("compScore").textContent = computerScore;
}
