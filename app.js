let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comScore++;
        compScorePara.innerText = comScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //Generate Computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            // userChoice = scissors
            userWin = compChoice === "rock" ? false : true;
        };
        showWinner(userWin, userChoice, compChoice);
    };

};

choices.forEach((choice) => {
    choice.addEventListener("click", playTime = () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
