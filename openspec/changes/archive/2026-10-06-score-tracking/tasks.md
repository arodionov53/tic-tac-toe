# Tasks

## 1. Score state and rendering

- [x] 1.1 Add a `renderScoreboard(scores)` function that prints a formatted scoreboard showing Player X wins, Player O wins, and draws. Verify: call it with `{ X: 2, O: 1, draw: 1 }` and confirm it prints all three counts with labels.
- [x] 1.2 Modify `playGame(rl)` to return `'X'` or `'O'` when a player wins, and `'draw'` when the game is a draw. Verify: the function's return value matches the game outcome (no change to printed messages).

## 2. Game loop integration

- [x] 2.1 In `main()`, initialize a scores object `{ X: 0, O: 0, draw: 0 }` before the rematch loop. After each `playGame` call, update the corresponding counter based on the returned result. Verify: play two games and confirm the scores object increments correctly.
- [x] 2.2 After updating scores in `main()`, call `renderScoreboard(scores)` so the scoreboard appears after the result message and before the "Play again?" prompt. Verify: play a game to completion — the scoreboard displays between the result and the rematch prompt, showing correct cumulative counts.
