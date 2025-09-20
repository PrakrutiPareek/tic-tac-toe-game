let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-button');
let turnO = true;
let clickCount = 0;
let newGameBtn = document.querySelector('.newgame-btn');
let resetGameButton = document.querySelector('.reset-button');
let winnerContainer = document.querySelector('.winner-container');
let winnerText = document.querySelector('.winner-text');
let main = document.querySelector('.main');

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]   
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
            }
        box.disabled = true;
        clickCount++;
        checkWinner();
    });
});

const resetGame = resetButton.addEventListener('click', () => {
    turnO = true;
    enabledBoxes();
    winnerContainer.classList.add("hide");
    clickCount = 0;
})

const newGame = newGameBtn.addEventListener('click', () => {
    turnO = true;
    enabledBoxes();
    winnerContainer.classList.add("hide");
    main.classList.remove('hide');
    clickCount = 0;
});

const disabledBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;});
}

const enabledBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}

const showWinner = (Winner) => {
    winnerText.innerText = `Congratulation!!! Winner is ${Winner}`;
    winnerContainer.classList.remove("hide");
    main.classList.add("hide");
    disabledBoxes();
}

const drawGame = () => {
    winnerText.innerHTML = `Opss.. Game is draw. Play Again!!`
    winnerContainer.classList.remove("hide");
    main.classList.add("hide");
    winnerText.style.backgroundColor =( "#aa2222") ;
}

const checkWinner = () => {
for (let combination of winningCombinations) {
    let pos1 = boxes[combination[0]].innerHTML;
    let pos2 = boxes[combination[1]].innerHTML;
    let pos3 = boxes[combination[2]].innerHTML;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
       if (pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);}
}};
if (clickCount === 9) {
    drawGame();}}

newGameBtn.addEventListener('click', newGame);
resetGameButton.addEventListener('click', resetGame);