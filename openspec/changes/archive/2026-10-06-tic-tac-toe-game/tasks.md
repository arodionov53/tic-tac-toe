# Tasks

## 1. Project scaffolding

- [x] 1.1 Create `package.json` with name `tic-tac-toe`, version `1.0.0`, and `"type": "module"`. Verify: `node -e "require('./package.json')"` or `cat package.json` shows valid JSON with the expected fields.
- [x] 1.2 Create `index.js` with a placeholder `console.log('tic-tac-toe')` and verify `node index.js` prints the message.

## 2. Board state and rendering

- [x] 2.1 Implement `createBoard()` returning a 9-element array of `null`. Implement `renderBoard(board)` that prints a 3×3 grid: numbered positions (1–9) for empty cells, X/O for marked cells, with row/column separators. Verify: run a manual test script that creates a board, places marks at indices 0 and 4, and prints — output shows `X` at position 1, `O` at position 5, and numbers for the rest.

## 3. Win and draw detection

- [x] 3.1 Implement `checkWinner(board)` that returns `'X'`, `'O'`, or `null` by checking all 8 winning triplets (3 rows, 3 columns, 2 diagonals). Verify: run a test script that sets up a winning row for X and confirms `checkWinner` returns `'X'`; set up a board with no winner and confirm it returns `null`.
- [x] 3.2 Implement `isBoardFull(board)` that returns `true` when no cell is `null`. Verify: run a test with a full board (returns `true`) and a board with one empty cell (returns `false`).

## 4. Player input and turn handling

- [x] 4.1 Implement `promptMove(rl, board, currentPlayer)` using `node:readline` that asks the current player for a position (1–9), validates the input (must be a number 1–9 targeting an empty cell), displays an error and re-prompts on invalid input, and resolves with the chosen index on success. Verify: run `node index.js`, enter an out-of-range value and an occupied cell — both show an error and re-prompt; enter a valid position — the mark is placed and the board re-renders.

## 5. Game loop and rematch

- [x] 5.1 Implement the main game loop: display a welcome message and instructions, show the empty board, alternate turns between X and O calling `promptMove`, re-render the board after each move, check for winner or draw after each move, and display the result. Verify: play a full game to a win — the winner message appears; play to a draw — the draw message appears.
- [x] 5.2 After the result, prompt "Play again? (y/n)". On `y`, reset the board and restart with Player X. On `n` (or any other input), print a goodbye message and exit. Verify: after a game ends, enter `y` — a new game starts; enter `n` — the program exits with a goodbye message.
