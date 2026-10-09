# Spec Delta

## Purpose

Detects game-over conditions: a player winning by completing a row, column, or diagonal, or a draw when all cells are filled.

## ADDED Requirements

### Requirement: Row win detection
The system SHALL declare a winner when one player's mark fills an entire row.

#### Scenario: Player wins by row
- **WHEN** a player places a mark that completes a full row of their marks
- **THEN** the system SHALL declare that player the winner

### Requirement: Column win detection
The system SHALL declare a winner when one player's mark fills an entire column.

#### Scenario: Player wins by column
- **WHEN** a player places a mark that completes a full column of their marks
- **THEN** the system SHALL declare that player the winner

### Requirement: Diagonal win detection
The system SHALL declare a winner when one player's mark fills either diagonal.

#### Scenario: Player wins by diagonal
- **WHEN** a player places a mark that completes a full diagonal of their marks
- **THEN** the system SHALL declare that player the winner

### Requirement: Draw detection
The system SHALL declare a draw when all 9 cells are filled and no player has won.

#### Scenario: All cells filled with no winner
- **WHEN** the last empty cell is filled and no row, column, or diagonal is completed by one player
- **THEN** the system SHALL declare the game a draw
