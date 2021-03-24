'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🥳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
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
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
    //When player wins
  } else if (guess === number) {
    displayMessage('Correct Number! 🥳');
    // document.querySelector('.message').textContent = 'Correct Number! 🥳';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Too High 😥' : 'Too Low 😥';
      displayMessage(guess > number ? 'Too High 😥' : 'Too Low 😥');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 💩');
      // document.querySelector('.message').textContent = 'You lost the game 💩';
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
//Challenge 1 - Implement Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  //message
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
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

//Implementing Highscore Button
