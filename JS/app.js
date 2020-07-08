//cashing the dom :which mean storing (sth)for future use
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_P = document.querySelector(".result > P");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random ()* 3);
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
  // const  userChoice_div = documnt.getElementById(userChoice);
   const smallUserWord ="user".fontsize(3).sub();
   const smallCompWord ="comp".fontsize(3).sub();
   result_P.innerHTML = `${convert(userChoice)}${smallUserWord}beats ${convert(computerChoice) }${smallCompWord}. you win!`; 
   //userChoice_div.classList.add("green-glow");
  // setTimeout(function(){userChoice_div.classList.remove("green-glow")},1000);
}
function lose (userChoice, computerChoice){
    computerScore ++;
 //   const userChoice_div = documnt.getElementById(userChoice);
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = computerScore;
   const smallUserWord ="user".fontsize(3).sub();
   const smallCompWord ="comp".fontsize(3).sub();
   result_P.innerHTML = `${convert(userChoice)}${smallUserWord}loses to ${convert(computerChoice) }${smallCompWord}. you lose ` ;
  // userChoice_div.classList.add("red-glow");
  // setTimeout(function(){userChoice_div.classList.remove("red-glow")},1000);
}
function draw (userChoice  ,computerChoice){
    // const userChoice_div = documnt.getElementById(userChoice);
    const smallUserWord ="user".fontsize(3).sub();
   const smallCompWord ="comp".fontsize(3).sub();
   result_P.innerHTML = `${convert(userChoice)}${smallUserWord}equal ${convert(computerChoice) }${smallCompWord}.  it's a draw` ;
  // userChoice_div.classList.add("gray-glow");
  // setTimeout(function(){userChoice_div.classList.remove("gray-glow")},1000);
}

function game (userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice)
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
        paper_div.addEventListener('click',function(){
            
            game ("p");
        })
        scissors_div.addEventListener('click',function(){ game ("s");
        })
}
main();
