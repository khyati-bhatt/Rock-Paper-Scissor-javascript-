const choices=document.querySelectorAll(".ch");
const button=document.querySelector("#msg");
let userScore=document.querySelector("#user");
let compScore=document.querySelector("#comp");
let uchoice=document.querySelector("#uchoice");
let cchoice=document.querySelector("#cchoice");
u_score=0;
c_score=0;

const compCh=()=>{
    const op=["ROCK","PAPER","SCISSOR"];
    let index=Math.floor(Math.random()*3);
    return op[index];

};

const draw=()=>{
    button.textContent="It was a DRAW!!!"; 
    button.style.backgroundColor="Blue"; 
};
const won=()=>{
    button.textContent="You WON!!!";  
    button.style.backgroundColor="Green"; 
    u_score++;
    userScore.textContent=u_score;
};
const lose=()=>{
    button.textContent="You LOST!!!";  
    button.style.backgroundColor="Red"; 
    c_score++;
    compScore.textContent=c_score;
};

const game=(ch)=>{
    console.log(ch);
    let compChoice=compCh();
    console.log(compChoice);
    uchoice.textContent=ch;
    cchoice.textContent=compChoice;
    if(ch===compChoice){
        draw();
    }
    else{
        if(ch==="ROCK"){
            if(compChoice==="PAPER"){
                lose();
            }
            else{
                won();
            }
        }
        else if(ch==="PAPER"){
            if(compChoice==="SCISSOR"){
                lose();
            }
            else{
                won();
            }
        }
        else{
            if(compChoice==="ROCK"){
                lose();
            }
            else{
                won();
            }
        }
    }

};

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        let userCh=choice.getAttribute("id");
        game(userCh);
    });
});
