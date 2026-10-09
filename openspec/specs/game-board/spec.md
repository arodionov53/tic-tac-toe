# Game Board Specification

## Purpose

Manages the 3×3 tic-tac-toe grid state and renders it as text for terminal display.

## Requirements

### Requirement: Board is a 3×3 grid
The system SHALL represent the board as a 3×3 grid where each cell is empty, X, or O.

#### Scenario: Initial board is empty
- **WHEN** a new game starts
- **THEN** all 9 cells SHALL be empty

#### Scenario: Cell holds a player mark
- **WHEN** a player places a mark on a cell
- **THEN** that cell SHALL contain the player's mark (X or O)

### Requirement: Board renders to terminal
The system SHALL display the board as a human-readable text grid with row and column separators, showing current marks and numbered positions for empty cells.

#### Scenario: Empty board display
- **WHEN** the board is empty
- **THEN** the system SHALL display a 3×3 grid with position numbers 1–9 for each cell

#### Scenario: Board with marks display
- **WHEN** some cells contain marks
- **THEN** marked cells SHALL show X or O, and empty cells SHALL show their position number
