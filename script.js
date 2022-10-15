const buttons = document.querySelectorAll('button');
let currentScore = 0;
let highScore = 0;
let computer = "";

function updateScore() {
    const playerScorePara = document.getElementById("currentScore");
    playerScorePara.textContent = "score: " + currentScore;
}
function updateHighScore() {
    const highScorePara = document.getElementById("highScore");
    highScorePara.textContent = "high score: " + highScore;
}
function displayComputerChoice() {
    const computerChoicePara = document.getElementById("computer");
    computerChoicePara.textContent = "computer says: " + computer;
}

buttons.forEach((button,) => {
    button.addEventListener('click', () => {
        let answr = Math.floor(Math.random() * 3);
        if (answr === 0) {
            computer = "guess";
            displayComputerChoice();
        } else if (answr === 1) {
            computer = "what's";
            displayComputerChoice();
        } else if (answr === 2) {
            computer = "next";
            displayComputerChoice();
        }
        if (button.id === computer) {
            currentScore++;
            updateScore();
            if (currentScore > highScore) {
                highScore = currentScore;
                updateHighScore();
            }
        }
        else {
            currentScore = 0;
            updateScore();
        }
        console.log(button.id);
        console.log(computer);
    });
});