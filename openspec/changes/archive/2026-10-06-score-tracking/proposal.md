# Proposal

## Why

Players have no visibility into how they are doing across multiple games in a session. Adding a scoreboard makes rematches more engaging by tracking cumulative results.

## What Changes

- Add in-memory score tracking for Player X wins, Player O wins, and draws
- Display a scoreboard after each game result, before the "Play again?" prompt
- Reset scores when the program exits (no persistence across sessions)

## Capabilities

### New Capabilities
- `score-tracking`: In-memory score state management and scoreboard rendering for tracking wins and draws across games in a session

### Modified Capabilities
- `game-loop`: Display the scoreboard after each game result message, before the rematch prompt

## Impact

- `index.js`: new score state object, `renderScoreboard()` function, and integration into the game loop
- No new dependencies
- No external systems affected
