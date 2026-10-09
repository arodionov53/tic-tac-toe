import readline from 'node:readline';

// --- Board state and rendering ---

function createBoard() {
  return Array(9).fill(null);
}

function renderBoard(board) {
  const lines = [];
  for (let row = 0; row < 3; row++) {
    const cells = [];
    for (let col = 0; col < 3; col++) {
      const idx = row * 3 + col;
      cells.push(board[idx] ?? String(idx + 1));
    }
    lines.push(` ${cells[0]} | ${cells[1]} | ${cells[2]} `);
    if (row < 2) {
      lines.push('---+---+---');
    }
  }
  console.log(lines.join('\n'));
}

// --- Score tracking ---

function renderScoreboard(scores) {
  console.log('\n--- Scoreboard ---');
  console.log(`Player X wins: ${scores.X}`);
  console.log(`Player O wins: ${scores.O}`);
  console.log(`Draws:         ${scores.draw}`);
  console.log('------------------');
}

// --- Win and draw detection ---

const WIN_TRIPLETS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],             // diagonals
];

function checkWinner(board) {
  for (const [a, b, c] of WIN_TRIPLETS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function isBoardFull(board) {
  return board.every((cell) => cell !== null);
}

// --- Player input ---

function promptMove(rl, board, currentPlayer) {
  return new Promise((resolve) => {
    const ask = () => {
      rl.question(`Player ${currentPlayer}, enter your move (1-9): `, (answer) => {
        const num = Number(answer);
        if (!Number.isInteger(num) || num < 1 || num > 9) {
          console.log('Invalid input. Please enter a number between 1 and 9.');
          ask();
          return;
        }
        const idx = num - 1;
        if (board[idx] !== null) {
          console.log('That cell is already occupied. Choose another.');
          ask();
          return;
        }
        resolve(idx);
      });
    };
    ask();
  });
}

// --- Game loop ---

async function playGame(rl) {
  console.log('\nWelcome to Tic-Tac-Toe!');
  console.log('Players take turns entering a position number (1-9) to place their mark.\n');

  const board = createBoard();
  let currentPlayer = 'X';

  renderBoard(board);

  while (true) {
    const idx = await promptMove(rl, board, currentPlayer);
    board[idx] = currentPlayer;
    console.log();
    renderBoard(board);

    const winner = checkWinner(board);
    if (winner) {
      console.log(`\nPlayer ${winner} wins! Congratulations!`);
      return winner;
    }
    if (isBoardFull(board)) {
      console.log("\nIt's a draw!");
      return 'draw';
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const scores = { X: 0, O: 0, draw: 0 };

  let playing = true;
  while (playing) {
    const result = await playGame(rl);
    scores[result]++;
    renderScoreboard(scores);
    await new Promise((resolve) => {
      rl.question('\nPlay again? (y/n): ', (answer) => {
        if (answer.trim().toLowerCase() !== 'y') {
          playing = false;
        }
        resolve();
      });
    });
  }

  console.log('Thanks for playing! Goodbye.');
  rl.close();
}

main();
