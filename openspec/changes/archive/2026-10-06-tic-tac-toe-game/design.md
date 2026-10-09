# Design

## Context

Greenfield Node.js CLI project. See proposal.md for motivation. The specs define four capabilities: game-board, player-turns, win-detection, and game-loop.

## Goals / Non-Goals

**Goals:**
- Single-file or small-module Node.js implementation runnable with `node index.js`
- Zero external dependencies — use only Node.js built-ins
- Clean separation between board state, input handling, win logic, and game flow

**Non-Goals:**
- AI opponent (two human players only)
- GUI or browser rendering
- Network/multiplayer support
- Persistent scorekeeping across sessions

## Decisions

### Single entry point (`index.js`)
**Choice:** One file with clearly separated functions rather than a multi-file module structure.
**Rationale:** The game is ~150–200 lines of logic. Multiple files would add overhead (imports, project config) without meaningful benefit. Functions map 1:1 to capabilities.
**Alternative considered:** Separate modules per capability — rejected as over-engineering for this scope.

### Node.js `readline` for terminal I/O
**Choice:** Use the built-in `node:readline` module for prompting players.
**Rationale:** It's included in Node.js, supports line-based input which is all we need, and avoids any dependency.
**Alternative considered:** `process.stdin` raw mode — rejected because `readline` handles line buffering and prompt display out of the box.

### Board state as a flat array
**Choice:** Represent the board as a 9-element array (indices 0–8), where each element is `null`, `'X'`, or `'O'`.
**Rationale:** Simplest structure. Position numbers 1–9 map to indices 0–8. Row/column/diagonal checks are straightforward index triplets.
**Alternative considered:** 2D array (3×3) — rejected because indexing by a single position number is more natural for player input.

## Risks / Trade-offs

- **[Minimal error handling]** → Acceptable for a local CLI game; no untrusted input beyond the terminal. Invalid input is handled per the player-turns spec.
- **[Single-file may grow]** → At this scope (~200 lines) it's manageable. If features are added later, refactoring into modules is straightforward.
