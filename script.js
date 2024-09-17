let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGame = document.querySelector('#newgame');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove('hide')
    disableBoxes() 
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turn0 === true) {
            box.innerText = '0'
            turn0 = false
        }else{
            box.innerText = 'X'
            turn0 = true
        }
        box.disabled = true;
        checkWinner()
    });
});

const checkWinner = ()=>{
    for(let pattern of winPattern){
       let val1 = boxes[pattern[0]].innerText;
       let val2 = boxes[pattern[1]].innerText;
       let val3 = boxes[pattern[2]].innerText;

       if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 == val2 && val2 == val3){
            // alert(`Player ${val1} wins!`)
            showWinner(val1)
       }
    }
}
};

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add('hide');
};

newGame.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
