function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  // Display results
  document.getElementById('playerChoice').textContent = `Your Choice: ${playerChoice}`;
  document.getElementById('computerChoice').textContent = `Computer's Choice: ${computerChoice}`;
  document.getElementById('winner').textContent = `Result: ${result}`;
}
