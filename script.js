
const btns = document.querySelectorAll('button');
const resultdiv = document.querySelector(".updates");
const roundend = document.querySelector(".round-ended")

const winner = document.createElement('h2');
const result = document.createElement('p');
const scorekeep = document.createElement('p');
const newbtn = document.createElement('button');

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

game();
function game(){
    var gameover = 0;
    var playerScore = 0;
    var computerScore = 0;
    var userChoice = "";

    // The game first requires the user to put his option
    btns.forEach(btn =>{
        btn.addEventListener("click", function(){
            userChoice = btn.value;
            console.log(`You chose ${userChoice}`);
            const computerChoice = getComputerChoice();
            playRound(userChoice, computerChoice);
        })
    })

    
    // The game get the choice of the computer
    // It starts the round
    

    function playRound(userChoice,computerChoice){
        if(userChoice === "rock" && computerChoice === "paper"){
            computerScore++;
            result.textContent = "You Lose! Paper beats Rock - computer get 1 point";
            resultdiv.appendChild(result);
        } else if(userChoice === "paper" && computerChoice === "scissors"){
            result.textContent = "You Lose! Scissors beats Paper - computer get 1 point";
            resultdiv.appendChild(result);
        } else if(userChoice === "scissors" && computerChoice === "rock"){
            computerScore++;
            result.textContent = "You Lose! Rock beats Scissors - computer get 1 point";
        } else if(userChoice === computerChoice ){
            result.textContent = "It's a tie";
            resultdiv.appendChild(result);
        } else {
            playerScore++;
            result.textContent = "You win!! You get 1 point";
            resultdiv.appendChild(result);
        }
            scorekeep.textContent = `Player score ${playerScore} vs Computer score ${computerScore}`;
            result.appendChild(scorekeep);


            if(playerScore === 5){
                winner.textContent = "You won the game!";
                roundend.appendChild(winner);
                resultdiv.remove();
                btns.forEach(btn =>{
                    btn.remove();
                });
                newbtn.textContent = "New Game";
                roundend.appendChild(newbtn);
                newbtn.addEventListener('click', function(){
                    window.location.reload();
                })
                gameover = 1;
            } else if(computerScore === 5){
                winner.textContent = "YOU LOST THE GAME. PC WON";
                roundend.appendChild(winner);
                resultdiv.remove();
                btns.forEach(btn =>{
                    btn.remove();
                });
                newbtn.textContent = "New Game";
                roundend.appendChild(newbtn);
                newbtn.addEventListener('click', function(){
                    window.location.reload();
                })
                gameover = 1;
        
            }
    }

    

}




