function computerPlay() {
    let move = 'Rock     Paper    Scissors '; // 9 charchter pad with white space
    let ran = Math.floor((Math.random() * 3)); // 0, 1, 2
    let stringStart = ran * 9; // 0, 9 , 18
    return move.substr(stringStart, 9).trim();

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) return `It's a tie, ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} and ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)}`;

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') return "You win. Rock beats Scissors.";
        else return "You lose. Paper beats Rock.";
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') return "You win. Paper beats Rock.";
        else return "You lose. Scissors beat Paper.";
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') return "You win. Scissors beat Paper.";
        else return "You lose. Rock beats Scissors.";
    }
}


const buttons = document.querySelectorAll("button");
// buttons.forEach(button => button.addEventListener("click",(event) => console.log( event.target.id)));

let playerScore = 0;
let pcScore = 0;
let rounds = 0;
const container = document.querySelector("div.game");

buttons.forEach(button => button.addEventListener("click",(event) => { 
    const playerMove = event.target.id.toString();
    const result = playRound( playerMove, computerPlay()); 
    const divResult= document.createElement("div");
    divResult.innerText = result;
    container.appendChild(divResult);
    rounds += 1;
    if(result.startsWith("You win.")) {
        playerScore += 1;
    }
    else {
        pcScore += 1;
    }
    const divScore = document.createElement("div");
    const divPlayerScore = document.createElement("div");
    divPlayerScore.classList = "player";
    divPlayerScore.innerText = "Player Score: " + playerScore;
    const divPcScore = document.createElement("div");
    divPcScore.innerText = "Computer Score: " + pcScore;
    const divRound = document.createElement("div");
    divRound.innerText = "Round: " + rounds;
    

    divScore.appendChild(divPlayerScore);
    divScore.appendChild(divPcScore);
    divScore.appendChild(divRound);

    container.appendChild(divScore);

    if (playerScore === 5 || pcScore === 5) {
        const divWinner = document.createElement("div");
        divWinner.innerText = `The winner is :${(playerScore === 5) ? "The Player." : "The Computer."}`;
        playerScore = 0;
        pcScore = 0;
        rounds = 0;
        container.appendChild(divWinner);
    }

} ));

