//cashing the dom :which mean storing (sth)for future use
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_P = document.querySelector('.result > P');
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.round() * 3);
    return choices [randomNumber];
    
}
function convert(letter)
{
    if (letter==="r") return "Rock";
    if (letter==="p") return "Paper";
    if (letter==="s") return "Scissors";
}
function win ( userChoice ,computerChoice){
   userScore ++;
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = computerScore;
   const smallUserWord ="user".fontsize(3).sub();
   const smallCompWord ="comp".fontsize(3).sub();
   result_P.innerHTML = `${convert(userChoice)}${smallUserWord}beats ${convert(computerChoice) }${smallCompWord}you win`; 
}
function lose (userChoice  ,computerChoice){
    computerScore ++;
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = computerScore;
   const smallUserWord ="user".fontsize(3).sub();
   const smallCompWord ="comp".fontsize(3).sub();
   result_P.innerHTML = `${convert(userChoice)}${smallUserWord}loses to ${convert(computerChoice) }${smallCompWord}you lose` ;
}
function draw (userChoice  ,computerChoice){
    onst smallUserWord ="user".fontsize(3).sub();
   const smallCompWord ="comp".fontsize(3).sub();
   result_P.innerHTML = `${convert(userChoice)}${smallUserWord}equal ${convert(computerChoice) }${smallCompWord}equals` ;
}

function game (userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
                    draw(userChoice,computerChoice);
                    break;    
    }
   
}
function main (){
    rock_div.addEventListener('click',function(){
        game ("r");
        })
        paper_div.addEventListener('click',function(){ game ("p");
        })
        scissors_div.addEventListener('click',function(){ game ("s");
        })
}
main();
