# Spec Delta

## MODIFIED Requirements

### Requirement: Game ends with a result message
The system SHALL display the outcome (which player won, or draw) when the game ends, followed by the session scoreboard.

#### Scenario: Player wins
- **WHEN** a player wins the game
- **THEN** the system SHALL display a message naming the winning player (X or O), then display the session scoreboard

#### Scenario: Game is a draw
- **WHEN** the game ends in a draw
- **THEN** the system SHALL display a message indicating a draw, then display the session scoreboard
