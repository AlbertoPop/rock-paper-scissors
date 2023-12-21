


function getComputerChoice(){
// We create a variable to get the number. 
// We use math.random to get a random number between 1 and 3. 
    var randomChoice = Math.floor(Math.random() * 3) + 1;
// 1 is Rock, 2 is Paper, 3 is Scissors
// IF we get 1 we return Rock, else if we get 2 we return paper, else return Scissors
    if(randomChoice === 1){
        return "Rock";
    } else if( randomChoice === 2){
        return "Paper";
    } else {
        return "Scissors";
    }
}