let userScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        updateScores(result);
        displayResult(result, userChoice, computerChoice);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'draw';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function updateScores(result) {
    if (result === 'user') {
        userScore++;
    } else if (result === 'computer') {
        computerScore++;
    }
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function displayResult(result, userChoice, computerChoice) {
    const resultText = document.getElementById('resultText');
    if (result === 'draw') {
        resultText.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (result === 'user') {
        resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}