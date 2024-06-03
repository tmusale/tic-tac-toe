let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winner = document.querySelector(".winner");
let count = 0;

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  winner.innerText = "";
  count = 0;
};

resetBtn.addEventListener("click", resetGame);

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turnO ? "O" : "X";
    turnO = !turnO;
    box.disabled = true;

    checkWinner();
    count++;
    if (count === 9 && winner.innerText == "") {
      winner.innerText = `Match is Draw`;
    }
  });
});

const showWinner = () => {
  winner.innerText = `Winner is ${win}`;
};

const checkWinner = () => {
  winPatterns.forEach((pattern) => {
    const pos1 = boxes[pattern[0]].innerText;
    const pos2 = boxes[pattern[1]].innerText;
    const pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos1 != "" && pos1 != "") {
      if (pos1 === pos2 && pos1 === pos3) {
        win = pos1 === "O" ? "Player 1" : "Player 2";
        showWinner();
        disableBoxes();
      }
    }
  });
};
