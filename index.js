

const rockEl = document.getElementById("rock-el")
const paperEl = document.getElementById("paper-el")
const scissorsEl = document.getElementById("scissors-el")


const computerCohice = document.getElementById("computer-el")
const userChoice = document.getElementById("player-el")
const resultEl = document.getElementById("result-el")

const turns = ["Rock", "Paper", "Scissors"]
let message = ""
let player
let computer

function startGame(){
    userButtons()
    
}


function userButtons(){

    rockEl.addEventListener("click", function(){
        console.log("clicked-Rock")
        player = turns[0]
        userChoice.innerText  = "Player:" + " " + turns[0]
        computerAnswer()
        result()
    })
    
    paperEl.addEventListener("click", function(){
        console.log("clicked-Paper")
        player = turns[1]
        userChoice.innerText = "Player:" + " " + turns[1]
        computerAnswer()
        result()
    })
    
    
    scissorsEl.addEventListener("click", function(){
        console.log("clicked-Scissors")
        player = turns[2]
        userChoice.innerText = "Player:" + " " + turns[2]
        computerAnswer()
        result()
    })

    
}



function computerAnswer(){
    
    for (let i = 0; i < 1; i++){
         message = Math.floor(Math.random() * turns.length)
         computerCohice.innerText = "Computer:" + " " +  turns[message]
         computer = turns[message]
    }

}


function result(){
   
    if(player == computer){
        resultEl.innerText = "Result:" + " " + "DRAW!"
    } else if(computer == "Scissors" && player == "Rock"){
        resultEl.innerText = "Result:" + " " + "YOU WIN!"
    } else if(computer == "Paper" && player == "Rock"){
        resultEl.innerText = "Result:" + " " + "YOU LOSE!"
    } 

    if(computer == "Rock" && player == "Paper"){
        resultEl.innerText = "Result:" + " " + "YOU WIN!"
    } else if(computer == "Scissors" && player == "Paper"){
        resultEl.innerText = "Result:" + " " + "YOU LOSE!"
    } 

    if(computer == "Paper" && player == "Scissors"){
        resultEl.innerText = "Result:" + " " + "YOU WIN!"
    } else if(computer == "Rock" && player == "Scissors"){
        resultEl.innerText = "Result:" + " " + "YOU LOSE!"
    } 
    
}


startGame()




