# Design

## Context

The game already has a rematch loop in `main()` that calls `playGame(rl)` repeatedly. Currently `playGame` returns nothing — it prints the result and exits. Score state needs to live outside `playGame` so it survives across rematches, and the scoreboard must render between the result message and the "Play again?" prompt.

## Goals / Non-Goals

**Goals:**
- Track X wins, O wins, and draws across games in a session
- Display a scoreboard after each game result
- Keep the change minimal — no structural refactor of `index.js`

**Non-Goals:**
- Persistent scores across sessions (file/database storage)
- Per-player naming or profiles
- Scoreboard formatting options or themes

## Decisions

### Return game outcome from `playGame`
**Choice:** Have `playGame` return a result string (`'X'`, `'O'`, or `'draw'`) so `main()` can update scores.
**Rationale:** Keeps score state management in `main()` where the rematch loop already lives. Minimal change to existing code — just add `return` statements to the existing win/draw branches.
**Alternative considered:** Pass a mutable score object into `playGame` — rejected because it couples game logic to scoring.

### Plain object for score state
**Choice:** Use `{ X: 0, O: 0, draw: 0 }` initialized in `main()` before the rematch loop.
**Rationale:** Simplest possible structure. No class or module needed for three counters.

### Inline `renderScoreboard` function
**Choice:** Add a `renderScoreboard(scores)` function that prints a formatted score summary.
**Rationale:** Matches the existing pattern of small standalone functions (`renderBoard`, `checkWinner`, etc.).

## Risks / Trade-offs

- **[Minimal change surface]** → Only `playGame` return value and `main()` loop body change. Low risk of breaking existing behavior.
- **[No reset command]** → Scores reset only by restarting the program. Acceptable for session-scoped tracking; a "reset scores" option can be added later if needed.
