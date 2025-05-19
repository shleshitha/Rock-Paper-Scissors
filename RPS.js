let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");
const resetbtn=document.querySelector("#reset");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)];
}

const drawGame=()=>{
    // console.log("Game is draw!");
    msg.innerText="Game is draw!! Play again"
    msg.style.backgroundColor="#2E2D4D";
    
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore+=1;
        msg.innerText=`You win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        // console.log("You win");
        user_score.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText=`You loose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        // console.log("You loose");
        comp_score.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    // console.log(userChoice,compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice==="scissors"? false : true;
        }
        else {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    }) 
})

const reset=()=>{
    msg.innerText="Play your move";
    msg.style.backgroundColor="#2E2D4D";
    userScore=0;
    compScore=0;
    user_score.innerText=userScore;
    comp_score.innerText=compScore
}

resetbtn.addEventListener("click",reset);