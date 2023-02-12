const container=document.getElementById("tictactoeContainer");
let result=document.getElementById("gameStatusDisplay");
let display =document.getElementById("turnDisplay");
let restart=document.getElementById("restart");
let count=0;
let data=["","","","","","","","",""]
container.addEventListener("click",(e)=>{
    if(count%2!=0 && count<=8 &&  e.target.innerHTML=="" && result.innerHTML==""){
        e.target.innerHTML="O";
        const index=e.target.getAttribute("name");
        display.innerHTML="X Turn"
        data[index]="O";
        check("O");
        count++;
    }
    else if(count%2==0 && count<=8 && e.target.innerHTML=="" && result.innerHTML==""){
        e.target.innerHTML="X";
        const index=e.target.getAttribute("name");
        display.innerHTML="O Turn"
        data[index]="X";
        check("X");
        count++
    }
   
})
restart.addEventListener("click",()=>{
    window.location.reload();
})

function check(value){
    if((data[0]==value&&data[1]==value&&data[2]==value) || (data[0]==value && data[3]==value &&data[6]==value) || (data[0]==value&&data[4]==value&&data[8]==value)||
     (data[3]==value&&data[4]==value&&data[5]==value) || (data[1]==value&&data[4]==value&&data[7]==value) || (data[2]==value&&data[4]==value&&data[6]==value) ||
     (data[6]==value&&data[7]==value&&data[8]==value) || (data[2]==value&&data[5]==value&&data[8]==value))
     {
        display.innerHTML="Game Over"
          result.innerHTML=`The winner is ${value}`
     }
     else if(count==8)
     {
        result.innerHTML=`Tie Game`;
        display.innerHTML="Game Over"
     }
}