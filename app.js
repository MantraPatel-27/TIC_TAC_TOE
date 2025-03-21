let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//player X //player 0
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;

        }else{
            box.innerText="X";
            turnO=true;

        }
        box.disabled=true;
        checkwin()
       
    })
    
}
function reset(){
    turnO=true;
    enablebutton();


}
function enablebutton(){
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    msgcontainer.classList.add("hide");
}
function diablebutton(){
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulation! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    diablebutton();

}
let count=0;
const checkwin=()=>{
    count+=1;
    for(let pattern of winpattern){
        
        // console.log((pattern[0]),(pattern[1]),(pattern[2]));
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){

                showwinner(pos1);
                
            }
        }
        

    }
    if(count===9){
        msg.innerText=`Tie`;
        msgcontainer.classList.remove("hide");
        diablebutton();

     }
};
resetbtn.addEventListener("clcik",()=>{
    for(let btns of boxes){
        btns.innerText="";
        turnO=true;


    }
})

resetbtn.addEventListener("click",reset);