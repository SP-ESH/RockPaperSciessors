function getComputerChoice(){
    var choise = ["Rock", "Paper", "Scissors"];
    return choise[Math.floor(Math.random()*choise.length)].toLowerCase();
}

var computerscore = 0;
var playerscore = 0;

function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return "Tie";
    }
    else if(playerSelection != computerSelection){
        if(playerSelection==="rock" && computerSelection==="scissors" ||
          playerSelection==="paper" && computerSelection==="rock" ||
          playerSelection==="scissors" && computerSelection==="paper"){
            return "player wins";
        }
        else if(playerSelection==="scissors" && computerSelection==="rock" ||
               playerSelection==="paper" && computerSelection==="scissors" ||
               playerSelection==="rock" && computerSelection==="paper"){
            return "computer wins";
        }
    }  
}

function game(){

    for(var i=0; i<5; i++){
        var computerSelection = getComputerChoice();
        var playerSelection = prompt();
        var result = playRound(playerSelection, computerSelection);
        if(result === "player wins"){
            playerscore++;
        }else if( result === "computer wins"){
            computerscore++;
        }else{
            playerscore++;
            computerscore++;
        }
    }
    console.log(playerscore);
    console.log(computerscore);
    if(playerscore < computerscore){
        conosle.log("computer wins!");
    }else if(computerscore < playerscore){
        console.log("playerwins");
    }else{
        console.log("game tie");
    }
}


console.log("print this " + playRound(playerSelection, computerSelection));

game();