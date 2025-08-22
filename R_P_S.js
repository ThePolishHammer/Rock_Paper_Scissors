

function getComputerChoice() {
    let randomNumber = Math.random() * 1000;
    if (randomNumber > 0 && randomNumber < 333) {
        return ("rock");
    }
    else if (randomNumber > 333 && randomNumber < 666) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function getPlayerChoice() {
   input = prompt().toLowerCase();
   return input;
}

function playRound(playerChoice, computerChoice) {

    if (computerChoice === playerChoice) {
        return ("tie");
        console.log("Tie");
    }
    else if ((computerChoice === "rock" && playerChoice === "paper") || 
    (computerChoice === "paper" && playerChoice === "scissors") || 
    (computerChoice === "scissors" && playerChoice === "rock")) {
        return ("win");
        console.log("Win");
    }
    else {
        return ("loss");
        console.log("Loss");
    }
    
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    for (i=0; i<5; i++) {
        let play = playRound(getPlayerChoice(), getComputerChoice());
        console.log(play);
        if (play === "tie") {
            tieScore++;
        }
        else if (play === "win") {
            playerScore++;
        }
        else if (play === "loss") {
            computerScore++;
        }
    }
   console.log(playerScore + " " + computerScore + " " + tieScore);
}






