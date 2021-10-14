function computerPlay() {
    let move = 'Rock     Paper    Scissors '; // 9 charchter pad with white space
    let ran = Math.floor((Math.random() * 3)); // 0, 1, 2
    let stringStart = ran * 9; // 0, 9 , 18
    return  move.substr(stringStart, 9).trim();

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) return `It's a tie, ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} and ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)}`;

    if(playerSelection === 'rock'){
        if(computerSelection === 'scissors') return "You win. Rock beats Scissors.";
        else return "You lose. Paper beats Rock.";
    }

    if(playerSelection === 'paper'){
        if(computerSelection === 'rock') return "You win. Paper beats Rock.";
        else return "You lose. Scissors beat Paper.";
    }

    if(playerSelection === 'scissors'){
        if(computerSelection === 'paper') return "You win. Scissors beat Paper.";
        else return "You lose. Rock beats Scissors.";
    }    
}

function game() {
    
    for(let i = 0; i < 5; i++) {
        let player = prompt("your turn: (Rock, Paper or Scissors)");
        console.log(playRound(player, computerPlay())); 
    }              
}