function computerPlay(){
    var option = Math.floor(Math.random() * (3) + 1);

    switch(option){
        case 1: return "Rock";
        break;
        case 2: return "Paper";
        break;
        case 3: return "Scissors";
        break;
        default: return "Rock";
        break;
    }
}

function playRound(playerSelection, computerSelection){
    let ps = playerSelection.toLowerCase();

    switch(computerSelection){
        case 'Rock': 
            switch(ps){
                case 'rock': return "Draw";
                break;

                case 'paper': return "You win!! Paper beats Rock";
                break;

                case 'scissors': return "You lose!! Rock beats Scissors";
                break;

                default: console.log("Invalid Option, Replayinng the round");
                return playRound(prompt("Rock, Paper or Scissors?"), computerSelection);
                break;

            }
            break;
        case 'Paper':
            switch(ps){
                case 'rock': return "You lose!! Paper beats Rock";
                break;

                case 'paper': return "Draw";
                break;

                case 'scissors': return "You win!! Scissors beats Paper";
                break;

                default: console.log("Invalid Option, Replayinng the round");
                return playRound(prompt("Rock, Paper or Scissors?"), computerSelection);
                break;

            }
            break;
        case 'Scissors':
            switch(ps){
                case 'rock': return "You win!! Rock beats Scissors";
                break;

                case 'paper': return "You lose!! Scissors beats Paper";
                break;

                case 'scissors': return "Draw";
                break;

                default: console.log("Invalid Option, Replayinng the round");
                return playRound(prompt("Rock, Paper or Scissors?"), computerSelection);
                break;

            }
            break;
        default: return "Unexpected error just ocurred idk sadge";
        break;
    }
}

function game(){
    var cont = 0;
    var regexWin = new RegExp("You win.*");
    var regexLose = new RegExp("You lose.*");

    for(var i =0 ; i<5 ; i++){ 

        let result = playRound(prompt("Rock, Paper or Scissors?"), computerPlay() )
        console.log(result);
        if(regexWin.test(result)){
            cont++;
        }else if(regexLose.test(result)){
            cont--;
        }else{
            i--;
        }
        console.log(i+ " "+cont) ;
    }

    if(cont > 0){
        return "Congratulations, you won!!"
    }else{
        return "The computer won, better luck next time!!"
    }

}

console.log(game());