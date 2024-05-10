let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleClick(index) {
  if (gameBoard[index] === '' && !checkWinner()) {
    gameBoard[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;
    if (checkWinner()) {
      alert(`${currentPlayer} wins!`);
    } else if (!gameBoard.includes('')) {
      alert('It\'s a draw!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
  ];
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}
