let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")
userscorepara=document.querySelector("#user-score")
compscorepara=document.querySelector("#comp-score")




choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        
        userChoice=choice.getAttribute("id");
      
        compChoice=gencompChoice();
        playgame(userChoice,compChoice);
    })
});
let gencompChoice=()=>
    {
        options=["rock","paper","scissor"]
       randomIdx=Math.floor (Math.random()*3);
       return options[randomIdx];
    }

    checkWin=(userWin,compChoice)=>
        {
            if(userWin==true)
            {
                console.log("You win!");
                userscore++;
                userscorepara.innerText=userscore;
                msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor="green";
            }
            else{
                console.log("you loss");
                compscore++;
                compscorepara.innerText=compscore;
                msg.innerText=`You Loss  ${compChoice} beats your ${userChoice}`;
                msg.style.backgroundColor="red";
            }
        }

let playgame=(userChoice,compChoice)=>
    {
        console.log(userChoice);
       console.log(compChoice);
        let userWin=true;
        if(userChoice===compChoice)
        {
        console.log("Match is Draw");
        msg.innerText="Game was draw";
        msg.style.backgroundColor="black";
        }
        else if(userChoice=="rock")
        {
            userWin=compChoice=="paper"?false:true;
            checkWin(userWin,compChoice);
        }
        else if(userChoice=="paper")
        {
            userWin=compChoice=="scissor"?false:true;
            checkWin(userWin,compChoice);
        }
        else if(userChoice=="scissor")
            {
                userWin=compChoice=="rock"?false:true;
                checkWin(userWin,compChoice);
            }
       
    }
 