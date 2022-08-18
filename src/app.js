document.addEventListener('DOMContentLoaded', () => {
 const squares = document.querySelectorAll('.square');

 for (const square of squares) {
  square.addEventListener('click', handleClick);
 }
});

const handleClick = (event) => {
 const square = event.target;
 const position = square.id;

 if (handleMove(position)) {
  const gameOverMessage = document.querySelector('.game-over');
  const message = document.querySelector('.message');
  const buttonReset = document.querySelector('.button-reset');

  message.innerHTML = `<p>O jogador ${teams[player]} venceu!</p>`;
  buttonReset.innerHTML = `<button>Reset</button>`;
  gameOverMessage.style.visibility = 'visible';
 }

 updateDisplay();
};

const updateDisplay = () => {
 const squares = document.querySelectorAll('.square');

 for (const square of squares) {
  const position = square.id;
  const symbol = board[position];

  if (symbol !== '') {
   square.innerHTML = `<div class="${symbol}"></div`;
  }
 }
};

const buttonReset = document.querySelector('.button-reset');

buttonReset.addEventListener('click', () => {
 const gameOverMessage = document.querySelector('.game-over');
 const message = document.querySelector('.message');
 const buttonReset = document.querySelector('.button-reset');
 const squares = document.querySelectorAll('.square');

 message.innerHTML = '';
 buttonReset.innerHTML = '';
 gameOverMessage.style.visibility = 'hidden';

 for (const square of squares) {
  square.innerHTML = '';
 }
 board = ['', '', '', '', '', '', '', '', ''];
 player = 0;
 gameOver = false;
});
