let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started!!!");
        started=true;

        levelUP();
    }
    
});
/* gameflash*/ 
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUP(){
    userSeq=[]; /* reset userseq bcz so we can click previous color in next level*/
    level++;
    h2.innerText=`Level ${level}`;


    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    
    
    gameSeq.push(randColor);
    btnFlash(randBtn);



}

function checkAns(idx){

    /*same color btn is click */

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUP,1000);/*if same color flash again so user get time to see*/
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}<b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },150);
       reset();
    }

}

/*userFlash*/
function btnPress(){
   let btn=this;
   btnFlash(btn);

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}