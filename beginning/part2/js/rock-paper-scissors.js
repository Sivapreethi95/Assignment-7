var computerChoice = Math.random();
do{
    do {
        var userChoice = window.prompt("Please enter rock, paper or scissors");

        if (userChoice!="rock" && userChoice!="paper" && userChoice!="scissors") {
            alert("Please enter either 'rock' or 'paper' or 'scissors'");
        }
    } while (userChoice!="rock" && userChoice!="paper" && userChoice!="scissors");

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    if(userChoice===computerChoice){
            window.alert("The result is a tie! Play again! Game will start again...");
    }
    else if(userChoice==="rock"){
        if(computerChoice==="scissors"){
            window.alert("You win!!");
        }
        else if(computerChoice==="paper"){
            window.alert("Computer wins!!");
        }
    }
    else if(userChoice==="paper"){
        if(computerChoice==="scissors"){
            window.alert("Computer wins!!");
        }
        else if(computerChoice==="rock"){
            window.alert("You win!!");
        }
    }
    else if(userChoice==="scissors"){
        if(computerChoice==="paper"){
            window.alert("You win!!");
        }
        else if(computerChoice==="rock"){
            window.alert("Computer wins!!");
        }
    }
} while (userChoice===computerChoice);
        


