'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;

const inputGuess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');

const highScoreEl = document.querySelector('.highscore');

const highScore = function () {
  if (highScoreEl.textContent > score) {
    return highScoreEl.textContent;
  } else {
    return (highScoreEl.textContent = score);
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
  message.textContent = 'Start quessing...';
  scoreEl.textContent = 20;
  numberEl.textContent = '?';
  inputGuess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
