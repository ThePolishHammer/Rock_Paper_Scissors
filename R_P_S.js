

function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(4);
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber === 1) {
        return ("rock");
    }
    else if (randomNumber === 2) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function getPlayerChoice() {
   input = prompt("Rock, Paper, or Scissors?").toLowerCase();
   if (input !== ("rock" || "paper" || "scissors")) {
    alert("Choose your throw!");
    getPlayerChoice();
   }
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
   if (playerScore === computerScore) {
    console.log("You tied.")
   }
   else if (playerScore > computerScore) {
    console.log("Congrats! You won!")
   }
   else {
    console.log("Sorry, you lose.")
   }
}

playGame();






