# Spec Delta

## Purpose

Tracks cumulative wins and draws for Player X and Player O across games within a single session, and renders a scoreboard to the terminal.

## ADDED Requirements

### Requirement: Session scores are tracked
The system SHALL maintain a running count of Player X wins, Player O wins, and draws for the duration of the session.

#### Scenario: Score updates after a win
- **WHEN** a player wins a game
- **THEN** that player's win count SHALL increase by one

#### Scenario: Score updates after a draw
- **WHEN** a game ends in a draw
- **THEN** the draw count SHALL increase by one

#### Scenario: Scores start at zero
- **WHEN** the program starts
- **THEN** all score counts (X wins, O wins, draws) SHALL be zero

### Requirement: Scoreboard is displayed after each game
The system SHALL display a scoreboard showing Player X wins, Player O wins, and draws after each game result and before the rematch prompt.

#### Scenario: Scoreboard after a game
- **WHEN** a game ends (win or draw)
- **THEN** the system SHALL display the current session scores for Player X wins, Player O wins, and draws
