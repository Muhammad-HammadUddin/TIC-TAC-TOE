let boxes = document.querySelectorAll('.box')
let newbtn = document.querySelector(".new-btn")
let winnerCon = document.querySelector('.winnercontainer')
let resetGame = document.querySelector('.resetgame');
let playerO = true;
let count = 0;

boxes.forEach(box => {
    box.addEventListener('click', function(e) {
        if (playerO) {
            box.innerHTML = "O"
            playerO = false;
            count++;
            checkwinner();
            computerturn();
        }
    })
})

function computerturn(){
    if (!playerO) {
        let player2 = 0;
        do {
          player2 = Math.floor(Math.random() * 9);
        } while (boxes[player2].innerHTML !== '');
        boxes[player2].innerHTML = "X";
        playerO = true;
        count++;
        checkwinner();
    }
}

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const enableboxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerHTML = "";
    })
}

const disabledboxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    })
}

const displaywinner = (winner) => {
    let printwinner = document.querySelector('.msg');
    if (winner === "Draw") {
        printwinner.innerHTML = "Oops! It's a Draw";
    } else {
        printwinner.innerHTML = `Congrats! Winner is ${winner} `;
    }
    winnerCon.classList.remove('hide');
}

const checkwinner = () => {
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i][0];
        let b = arr[i][1];
        let c = arr[i][2];
        if (boxes[a].innerHTML == boxes[b].innerHTML && boxes[b].innerHTML == boxes[c].innerHTML && boxes[a].innerHTML != "") {
            displaywinner(boxes[a].innerHTML);
            disabledboxes();
        }
    }
    if (count === 9) {
        displaywinner("Draw");
    }
}

const newGame = () => {
    winnerCon.classList.add('hide');
    enableboxes();
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
    playerO = true;
    count = 0;
}

newbtn.addEventListener('click', newGame);
resetGame.addEventListener('click', newGame);