"use strict";

const body = document.querySelector("body");
let userScore = 0;
let cpuScore = 0;
const userScoreDiv = document.querySelector(".user-score");
const cpuScoreDiv = document.querySelector(".computer-score");
const userLabel = document.getElementById("user-label");
const computerLabel = document.getElementById("computer-label");
const result = document.querySelector(".result");
const rock = document.querySelector(".r");
const paper = document.querySelector(".p");
const scissors = document.querySelector(".s");
const actionMessage = document.querySelector(".action-message");
const resetBtn = document.querySelector(".btn");
const playerMove = document.querySelector(".you-played");
const cpuMove = document.querySelector(".cpu-played");
const hidden = document.querySelector(".hidden");
const choices = ["✊", "🖐️", "✌️"];
const rockN = choices[0];
const paperN = choices[1];
const scissorsN = choices[2];
let computerChoice;
let playing = true;

const win = () => {
  userScore++;
  userScoreDiv.textContent = userScore;
};

const lose = () => {
  cpuScore++;
  cpuScoreDiv.textContent = cpuScore;
};

function getComputerChoice() {
  const randomNumber = Math.trunc(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "✊" + "✌️":
      result.textContent = "Rock breaks scissors. You win!";
      win();
      break;
    case "🖐️" + "✊":
      result.textContent = "Paper covers rock. You win!";
      win();

      break;
    case "✌️" + "🖐️":
      result.textContent = "Scissors cuts paper. You win!";
      win();

      break;
    case "✊" + "🖐️":
      result.textContent = "Paper covers rock. You lost!";
      lose();
      break;
    case "🖐️" + "✌️":
      result.textContent = "Scissors cuts paper. You lost!";
      lose();

      break;
    case "✌️" + "✊":
      result.textContent = "Rock breaks scissors. You lost!";
      lose();

      break;
    default:
      result.textContent = "DRAW";
      body.style.backgroundColor = "#24272e";
      console.log("Draw");
  }
  if (userScore === 5) {
    actionMessage.textContent = "YOW WIN! 🎉🎉🎉🎉🎉🎉";
    actionMessage.style.color = "#1c7ed6";
    playing = false;
    body.style.backgroundColor = "#69db7c";
  } else if (cpuScore === 5) {
    actionMessage.textContent = "YOU LOST! 😭😭😭😭😭😭";
    playing = false;
    body.style.backgroundColor = "#c92a2a";
  }
}

rock.addEventListener("click", () => {
  if (playing) {
    game(rockN);
    cpuMove.textContent = computerChoice;
    playerMove.textContent = "✊";
    result.classList.remove("hidden");
  }
});

paper.addEventListener("click", () => {
  if (playing) {
    game(paperN);
    cpuMove.textContent = computerChoice;
    playerMove.textContent = "🖐️";
    result.classList.remove("hidden");
  }
});

scissors.addEventListener("click", () => {
  if (playing) {
    game(scissorsN);
    cpuMove.textContent = computerChoice;
    playerMove.textContent = "✌️";
    result.classList.remove("hidden");
  }
});

resetBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#24272e";
  actionMessage.textContent = "Make Your Choice";
  actionMessage.style.color = "#fff";
  userScore = 0;
  cpuScore = 0;
  userScoreDiv.textContent = 0;
  cpuScoreDiv.textContent = 0;
  playerMove.textContent = "";
  cpuMove.textContent = "";
  playing = true;
  result.textContent = "";
});
