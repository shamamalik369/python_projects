let boxes=document.querySelectorAll(".box")
let resetb=document.querySelector("#reset")
let newb=document.querySelector("#new-btn");
let msgcontain=document.querySelector(".msg-container");
let msg1=document.querySelector("#msg");
let turn0=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Clicked Happened");
        if(turn0){
            box.innerText="O";
            turn0=false;

        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();


    });
});
const showWinner=(winner)=>{
    msg1.innerText="Congratulations, Winner is " + winner;
     
};
const checkWinner=()=>{
    for(let pat of winPattern){
        let w1=boxes[pat[0]].innerText;
        let w2=boxes[pat[1]].innerText;
        let w3=boxes[pat[2]].innerText;

        if (w1!="" &&w2!="" && w3!=""){
            if(w1===w2 && w2===w3){
                console.log("WINNER",w1);
                showWinner(w1);
            }
        }
    }

}

