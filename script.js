// We need this function to get a computer choice

function getComputerChoice(){
    // We use math.random to get a random number between 1 and 3 on a variable. 
    var randomChoice = Math.floor(Math.random() * 3) + 1;
    // IF we get 1 we return Rock, else if we get 2 we return paper, else return Scissors
    if(randomChoice === 1){
        return "rock";
    } else if( randomChoice === 2){
        return "paper";
    } else {
        return "scissors";
    }
}



// we give score 0 to each player in a variable
var playerScore = 0;
var computerScore = 0;

// we play the game until someone is reaching a score of 5. 
while(playerScore < 5 && computerScore <5){
    game();
}

function game(){
    // The game first requires the user to put his option
    const userChoice = prompt().toLowerCase();
    console.log(`You chose ${userChoice}`);
    // The game get the choice of the computer
    const computerChoice = getComputerChoice();
    // It starts the round
    playRound(userChoice, computerChoice);

    function playRound(userChoice,computerChoice){
        if(userChoice === "rock" && computerChoice === "paper"){
            computerScore++;
            console.log("You Lose! Paper beats Rock - computer get 1 point");
        } else if(userChoice === "paper" && computerChoice === "scissors"){
            computerScore++;
            console.log("You Lose! Scissors beats Paper - computer get 1 point")
        } else if(userChoice === "scissors" && computerChoice === "rock"){
            computerScore++;
            console.log("You Lose! Rock beats Scissors - computer get 1 point")
        } else if(userChoice === computerChoice ){
            console.log("It's a tie")
        } else {
            playerScore++;
            console.log ("You win!! You get 1 point");
        }
    }

    console.log(playerScore);
    console.log(computerScore);
}



