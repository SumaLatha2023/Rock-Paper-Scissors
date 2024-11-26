let countWin = 0, countLose = 0; // user pov 

const choices = document.querySelectorAll('.choice');

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
}

const msg = document.querySelector('#msg');

let drawGame = () => {
    msg.innerText = "Draw Game! Play Again";
    msg.style.backgroundColor = "#081b31";
}

let resultBoard = (userWin, userChoice, compChoice) => {
    if(userWin){
        countWin++;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        let userScore = document.querySelector('#user-score');
        userScore.innerText = `${countWin}`;
    }
    else{
        countLose++;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        let compScore = document.querySelector('#comp-score');
        compScore.innerText = `${countLose}`;
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // compChoice -> paper, scissors
            userWin = (compChoice === "paper")? false: true;
        }
        else if(userChoice === "paper"){
            // compChoice -> scissors, rock
            userWin = (compChoice === "scissors")? false: true;
        }
        else{
            // userChoice -> scissors
            // compChoice -> rock, paper
            userWin = (compChoice === "rock")? false: true;
        }
        resultBoard(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})