let players = document.querySelector(".players");
let startBtn = document.querySelector("#start-btn");

let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let player1, player2;
let storeName = () => {
  player1 = document.querySelector("#player1").value;
  player2 = document.querySelector("#player2").value;
};
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
  msgContainer.classList.add("hide");
};

players.addEventListener("submit", () => {
  container.classList.remove("hide");
  resetBtn.classList.remove("hide");
  players.classList.add("hide");

  console.log(player1);
  console.log(player2);
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box Clicked");

    if (turnO) {
      box.innerHTML = "<h1 style='font-size:8vmin;'>O</h1>";
      turnO = false;
    } else {
      box.innerHTML = "<h1 style='font-size:8vmin;'>X</h1>";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const showWinner = (winner) => {
  if (winner === "<h1>O</h1>") {
    msg.innerHTML = `Congratulations, ${player1} : O Won`;
  } else {
    msg.innerHTML = `Congratulations, ${player2} : X Won`;
  }
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", () => {
  msgContainer.classList.add("hide");
  container.classList.add("hide");
  players.classList.remove("hide");
});

resetBtn.addEventListener("click", resetGame);
