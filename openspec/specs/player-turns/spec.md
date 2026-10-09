# Player Turns Specification

## Purpose

Handles alternating turn-based input for two human players, including move validation and error feedback.

## Requirements

### Requirement: Players alternate turns
The system SHALL alternate turns between Player X and Player O, starting with Player X.

#### Scenario: First turn is Player X
- **WHEN** a new game starts
- **THEN** Player X SHALL be prompted to move first

#### Scenario: Turn alternates after valid move
- **WHEN** a player makes a valid move
- **THEN** the other player SHALL be prompted for the next move

### Requirement: Player selects a cell by number
The system SHALL accept a position number (1–9) from the current player to place their mark.

#### Scenario: Valid position input
- **WHEN** a player enters a number between 1 and 9 corresponding to an empty cell
- **THEN** the system SHALL place the player's mark in that cell

### Requirement: Invalid moves are rejected
The system SHALL reject moves that target an occupied cell or are outside the valid range, and prompt the same player to try again.

#### Scenario: Occupied cell
- **WHEN** a player enters a position that already contains a mark
- **THEN** the system SHALL display an error message and prompt the same player again

#### Scenario: Out-of-range input
- **WHEN** a player enters a value that is not a number between 1 and 9
- **THEN** the system SHALL display an error message and prompt the same player again
