
let choice = ["Rock", "Paper", "Scissors"];
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
computerScore = 0
playerScore = 0

//gets computer to choose randomly from three choices in an array

function getComputerChoice() {

let compChoice = Math.floor(Math.random() * choice.length);
let compChoiceString = String(compChoice)
return(choice[compChoiceString])
}


//gets player to type in their choice

function playerChoice() {

let playerChoice = window.prompt("Choose your warrior:");
return (playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1,).toLowerCase());
} 


//plays a single game by comparing computer and player choices and outputs a message

function singleGame(computerSelection, playerSelection) {
if (computerSelection === playerSelection) {
    console.log("It's a Draw! Try Again!")
} else if (computerSelection === "Rock" && playerSelection === "Scissors") {
    console.log("Rock smashes Scissors! You Lose!"), computerScore++
} else if (computerSelection === "Rock" && playerSelection === "Paper") {
    console.log("Paper wraps Rock! You Win!"), playerScore++
} else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    console.log("Scissors cut Paper! You Lose!"), computerScore++
} else if (computerSelection === "Scissors" && playerSelection === "Rock") {
    console.log("Rock smashes Scissors! You Win!"), playerScore++
} else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    console.log("Scissors cut Paper! You Win!"), playerScore++
} else if (computerSelection === "Paper" && playerSelection === "Rock") {
    console.log("Paper wraps Rock! You Lose!"), computerScore++
}

}

//compares inputs to evaluate winner

// function game() {
     
//     let computerSelection = getComputerChoice();
//     singleGame(computerSelection, playerSelection);

// }

//runs the game three times in a row and logs scores

// function games() {

//     computerScore = 0
//     playerScore = 0

//     for (let i = 0; i < 3; i++)this.game();

//     console.log("The Computer Scored: " + computerScore + " You Scored: " + playerScore)
    
//     if (computerScore > playerScore) {
//         console.log("You were beaten by an AI! Get to the mines...")
//     } else if (computerScore === playerScore) {
//         console.log("You've drawn with the computer! Well Played.")
//     } else if (computerScore < playerScore) {
//         console.log("You've beaten the computer! Just wait till Skynet...")
//     }

// }



rock.addEventListener("click", function() {
    singleGame(getComputerChoice(), "Rock")
});

paper.addEventListener("click", function() {
    singleGame(getComputerChoice(), "Paper")
})

scissors.addEventListener("click", function() {
    singleGame(getComputerChoice(), "Scissors")
})
