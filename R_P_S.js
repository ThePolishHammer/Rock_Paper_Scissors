

function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(4);
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber === 1) {
        alert("The bot threw rock!");
        console.log("The bot threw rock!");
        return ("rock");
    }
    else if (randomNumber === 2) {
        alert("The bot threw paper!");
        console.log("The bot threw paper!");
        return ("paper");
    }
    else {
        alert("The bot threw scissors!");
        console.log("The bot threw scissors!");
        return ("scissors");
    }
}

function getPlayerChoice() {
   input = prompt("Rock, Paper, or Scissors?").toLowerCase();
   if (input !== "rock" && input !== "paper" && input !== "scissors") {
    alert("Choose your throw!");
    getPlayerChoice();
   }
   else {
    alert("You threw " + input + ".");
    console.log("You threw " + input + ".");
   }
   return input;
}

function playRound(playerChoice, computerChoice) {

    if (computerChoice === playerChoice) {
        alert("Tie.");
        return ("tie");
    }
    else if ((computerChoice === "rock" && playerChoice === "paper") || 
    (computerChoice === "paper" && playerChoice === "scissors") || 
    (computerChoice === "scissors" && playerChoice === "rock")) {
        alert("Win!");
        return ("win");
    }
    else {
        alert("Loss.");
        return ("loss");
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
    alert("Your score is " + playerScore + " to " + computerScore + " with " + tieScore + " ties.")
   console.log(playerScore + " " + computerScore + " " + tieScore);
   if (playerScore === computerScore) {
    alert("You tied.");
    console.log("You tied.");
   }
   else if (playerScore > computerScore) {
    alert("Congrats! You won!");
    console.log("Congrats! You won!");
   }
   else {
    alert("Sorry, you lose.");
    console.log("Sorry, you lose.");
   }
}



playGame();






