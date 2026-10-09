# Game Loop Specification

## Purpose

Orchestrates the top-level game flow: starting a game, running turns until completion, displaying results, and offering a rematch.

## Requirements

### Requirement: Game starts with a welcome message
The system SHALL display a welcome message and instructions when launched.

#### Scenario: Application starts
- **WHEN** the user launches the game
- **THEN** the system SHALL display a welcome message, brief instructions, and the empty board

### Requirement: Game ends with a result message
The system SHALL display the outcome (which player won, or draw) when the game ends, followed by the session scoreboard.

#### Scenario: Player wins
- **WHEN** a player wins the game
- **THEN** the system SHALL display a message naming the winning player (X or O), then display the session scoreboard

#### Scenario: Game is a draw
- **WHEN** the game ends in a draw
- **THEN** the system SHALL display a message indicating a draw, then display the session scoreboard

### Requirement: Rematch is offered after game ends
The system SHALL ask the players if they want to play again after each game.

#### Scenario: Players choose to play again
- **WHEN** the game ends and the players choose to play again
- **THEN** the system SHALL reset the board and start a new game with Player X going first

#### Scenario: Players choose to quit
- **WHEN** the game ends and the players choose not to play again
- **THEN** the system SHALL display a goodbye message and exit
