let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");

let generateCompChoice=()=>{
    const obj=['rock','paper','scissors'];
    const random=Math.floor(Math.random()*3);
    return obj[random];
};

const msg=document.querySelector("#result");
const user_Score=document.querySelector("#user-score");
const comp_Score=document.querySelector("#comp-score");

const drawGame=()=>{
    console.log('it is a draw');
    msg.style.backgroundColor='yellow';
    msg.style.color='violet';
    msg.innerText='Game is a draw. Play again';
};

const showWin=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user_Score.innerText=userScore
        console.log('you win');
        msg.innerText=`You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='Green';
    }else{
        compScore++;
        comp_Score.innerText=compScore;
        console.log('you lose');
        msg.innerText=`You lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor='red';
    }
};





const playGame=((userChoice)=>{
    console.log("userchoice: ",userChoice);
    //computer choice
    const compChoice=generateCompChoice();
    console.log("cmputer choice: ",compChoice);

    if (userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if (userChoice==='rock'){
            //scisrs,paper
            userWin=compChoice==='paper'?false:true;
        }
        else if(userChoice==='paper'){
            //rock,scissors
            userWin=compChoice=='scissors'?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==='rock'?false:true;
        }
        showWin(userWin,userChoice,compChoice);
    }
    
});

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});