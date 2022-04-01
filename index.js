'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;

const inputGuess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highScoreEl = document.querySelector('.highscore');

//
let highScoreLocal = localStorage.getItem('highscore');
let highElement = (highScoreEl.textContent = !localStorage.getItem('highscore')
  ? 0
  : highScoreLocal);
// const getNewHighScore = localStorage.getItem('newScore');

const highScore = function () {
  if (highScoreLocal > score) {
    // console.log(`${highScoreLocal} is higher than ${score}`);
    highScoreEl.textContent = highScoreLocal;
  } else {
    localStorage.setItem('highscore', score);
    // highScoreValue = localStorage.getItem('highscore');
    // console.log(`${score} is higher than ${highScoreLocal}`);
  }
};

btnCheck.addEventListener('click', function () {
  const input = Number(inputGuess.value);
  if (!input) {
    message.textContent = '❌  Input a number!';
  } else if (input === secretNumber) {
    message.textContent = '🍾 You got correct!';
    document.querySelector('body').style.backgroundColor = '#023020';
    numberEl.style.fontSize = '6rem';
    numberEl.textContent = secretNumber;
    highScore();
  } else if (input > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too High';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = '😭 Game Over!';
      scoreEl.textContent = 0;
    }
  } else if (input < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too Low';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = '😭 Game Over!';
      scoreEl.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  if (!localStorage.getItem('highscore')) {
    console.log("can't work now banza ukine!");
  } else {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    message.textContent = 'Start quessing...';
    scoreEl.textContent = score;
    numberEl.textContent = '?';
    inputGuess.value = '';
    highScoreEl.textContent = localStorage.getItem('highscore');
    document.querySelector('body').style.backgroundColor = '#222';
  }
});
