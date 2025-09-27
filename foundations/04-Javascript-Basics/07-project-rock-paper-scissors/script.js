function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  let humanChoice = prompt("Enter 0 for rock, 1 for paper or 2 for scissor.");
  return humanChoice;
}

let humanScore = 0,
  computerScore = 0;

function playRound(computerChoice, humanChoice) {
  if (computerChoice == humanChoice) return "Tie";
  if (computerChoice === 0 && humanChoice === 1) {
    humanScore++;
    return "Human(paper) wins!";
  } else if (computerChoice === 1 && humanChoice === 2) {
    humanScore++;
    return "Human(scissor) wins!";
  } else if (computerChoice === 2 && humanChoice === 0) {
    humanScore++;
    return "Human(rock) wins!";
  } else {
    computerScore++;
    return computerChoice === 0
      ? "Computer(rock wins)"
      : computerChoice === 1
      ? "Computer(paper) wins"
      : "Computer(scissor) wins";
  }
}

let bestOf = 5;
while (bestOf) {
  let humanChoice = Number(getHumanChoice());
  let computerChoice = getComputerChoice();

  let result = playRound(computerChoice, humanChoice);

  console.log(result);
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
  bestOf--;
}

if(humanScore>computerScore)
    console.log("🎉 Human wins the game!");
else if(computerScore>humanScore)
    console.log("💻 Computer wins the game!");
else
    console.log("🤝 It's a tie overall!");
