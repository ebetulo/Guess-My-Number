'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //There is no guess case
  if (!guess) {
    // REFACTORING - document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
    //When player wins case
  } else if (guess === number) {
    displayMessage('Correct Number! 🥳');
    // REFACTORING - document.querySelector('.message').textContent = 'Correct Number! 🥳';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Implementing Highscore Button
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
     //There is wrong guess case
  } else if (guess !== number) {
    if (score > 1) {
      // REFACTORING - document.querySelector('.message').textContent =
      //   guess > number ? 'Too High 😥' : 'Too Low 😥';
      displayMessage(guess > number ? 'Too High 😥' : 'Too Low 😥');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 💩');
      // REFACTORING - document.querySelector('.message').textContent = 'You lost the game 💩';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too high
    //  else if (guess > number) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High 😥';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game 💩';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   // When guess is too low
    // } else if (guess < number) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low 😥';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game 💩';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});
//Implement Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  //message
  displayMessage('Start guessing...');
  // REFACTORING - document.querySelector('.message').textContent = 'Start guessing...';
  //background-color
  document.querySelector('body').style.backgroundColor = '#222';
  //width of secret number
  document.querySelector('.number').style.width = '15rem';
  //initial value of secret number '?'
  document.querySelector('.number').textContent = '?';
  //initial value of the score
  document.querySelector('.score').textContent = score;
  //guess input field
  document.querySelector('.guess').value = '';
});

