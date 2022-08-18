// tem 9 squares
// cada vez é um jogador (jogador 1 e jogador 2)
// cada jogador escolhe o que ele quer ser (x ou o)
// cada um vai escolher uma posição
// e vai marcar onde escolheu a posição

// para vencer, se houverem 3 simbolos seguidos do mesmo, acaba o jogo
// tanto na horizontal, vertical ou diagonal

let board = ['', '', '', '', '', '', '', '', ''];
let player = 0;
const teams = ['O', 'X'];
let gameOver = false;

const handleMove = (position) => {
 if (gameOver) return;
 if (board[position] == '') {
  board[position] = teams[player];

  gameOver = isWinner();

  if (gameOver === false) {
   if (player === 0) {
    player = 1;
   } else {
    player = 0;
   }
  }
 }
 return gameOver;
};

const isWinner = () => {
 const winStates = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonal
  [0, 4, 8],
  [2, 4, 6]
 ];

 for (let i = 0; i < winStates.length; i++) {
  const winIndex = winStates[i];

  let position1 = winIndex[0];
  let position2 = winIndex[1];
  let position3 = winIndex[2];

  if (
   board[position1] === board[position2] &&
   board[position1] === board[position3] &&
   board[position1] !== ''
  ) {
   return true;
  }
 }
 return false;
};
