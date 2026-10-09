# Graph Report - tic-tac-toe  (2026-10-09)

## Corpus Check
- Corpus is ~32,099 words - fits in a single context window. You may not need a graph.

## Summary
- 68 nodes · 87 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 75% EXTRACTED · 25% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- OpenSpec Change Workflow
- Game Engine Core
- Score Tracking Feature
- Spec Sync & Archive
- Project Configuration
- Game Board Module
- Player Input Handling
- Win Detection Logic
- Package Metadata
- Game Loop Spec
- Initial Game Proposal

## God Nodes (most connected - your core abstractions)
1. `playGame()` - 7 edges
2. `Game Board Specification` - 7 edges
3. `Game Loop Specification` - 7 edges
4. `OpenSpec Sync Specs Skill` - 6 edges
5. `OpenSpec CLI` - 6 edges
6. `Tic-Tac-Toe Game Change Proposal` - 6 edges
7. `OPSX Apply Command` - 5 edges
8. `Player Turns Specification` - 5 edges
9. `Win Detection Specification` - 5 edges
10. `OPSX Archive Command` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Archived Change: Score Tracking` --conceptually_related_to--> `Tic-Tac-Toe Project`  [INFERRED]
  openspec/changes/archive/2026-10-06-score-tracking/.openspec.yaml → README.md
- `Archived Change: Tic-Tac-Toe Game` --conceptually_related_to--> `Tic-Tac-Toe Project`  [INFERRED]
  openspec/changes/archive/2026-10-06-tic-tac-toe-game/.openspec.yaml → README.md
- `Game Loop Spec Delta (Score Tracking)` --references--> `Game Loop Specification`  [INFERRED]
  openspec/changes/archive/2026-10-06-score-tracking/specs/game-loop/spec.md → openspec/specs/game-loop/spec.md
- `Game Board Spec Delta` --implements--> `Game Board Specification`  [INFERRED]
  openspec/changes/archive/2026-10-06-tic-tac-toe-game/specs/game-board/spec.md → openspec/specs/game-board/spec.md
- `Score Tracking Change Proposal` --references--> `Tic-Tac-Toe Game Change Proposal`  [INFERRED]
  openspec/changes/archive/2026-10-06-score-tracking/proposal.md → openspec/changes/archive/2026-10-06-tic-tac-toe-game/proposal.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **OpenSpec Change Lifecycle** — _claude_commands_opsx_explore_opsx_explore, _claude_commands_opsx_propose_opsx_propose, _claude_commands_opsx_apply_opsx_apply, _claude_commands_opsx_sync_opsx_sync, _claude_commands_opsx_archive_opsx_archive, _claude_commands_opsx_update_opsx_update [EXTRACTED 1.00]
- **OPSX Commands Mirror OpenSpec Skills** — _claude_commands_opsx_apply_opsx_apply, _claude_commands_opsx_archive_opsx_archive, _claude_commands_opsx_explore_opsx_explore, _claude_commands_opsx_propose_opsx_propose, _claude_commands_opsx_sync_opsx_sync, _claude_commands_opsx_update_opsx_update, _claude_skills_openspec_apply_change_skill_openspec_apply_change, _claude_skills_openspec_archive_change_skill_openspec_archive_change, _claude_skills_openspec_explore_skill_openspec_explore, _claude_skills_openspec_propose_skill_openspec_propose, _claude_skills_openspec_sync_specs_skill_openspec_sync_specs, _claude_skills_openspec_update_change_skill_openspec_update_change [EXTRACTED 1.00]
- **Archived Changes Using Spec-Driven Schema** — openspec_changes_archive_2026_10_06_score_tracking_openspec_yaml, openspec_changes_archive_2026_10_06_tic_tac_toe_game_openspec_yaml, spec_driven_workflow [EXTRACTED 1.00]
- **Core Tic-Tac-Toe Game Capabilities** — openspec_specs_game_board_spec_game_board, openspec_specs_player_turns_spec_player_turns, openspec_specs_win_detection_spec_win_detection, openspec_specs_game_loop_spec_game_loop [EXTRACTED 1.00]
- **Game Loop Orchestration Flow** — openspec_specs_game_loop_spec_main_function, openspec_specs_game_loop_spec_play_game, openspec_specs_score_tracking_spec_render_scoreboard [EXTRACTED 1.00]
- **Score Tracking Design Decisions** — openspec_changes_archive_2026_10_06_score_tracking_design_return_game_outcome, openspec_changes_archive_2026_10_06_score_tracking_design_plain_object_score_state, openspec_changes_archive_2026_10_06_score_tracking_design_inline_render_scoreboard [EXTRACTED 1.00]

## Communities (11 total, 1 thin omitted)

### Community 0 - "OpenSpec Change Workflow"
Cohesion: 0.23
Nodes (10): OPSX Apply Command, OPSX Explore Command, OPSX Propose Command, OPSX Update Command, OpenSpec Apply Change Skill, OpenSpec Explore Skill, OpenSpec Propose Skill, OpenSpec Update Change Skill (+2 more)

### Community 1 - "Game Engine Core"
Cohesion: 0.31
Nodes (9): checkWinner(), createBoard(), isBoardFull(), main(), playGame(), promptMove(), renderBoard(), renderScoreboard() (+1 more)

### Community 2 - "Score Tracking Feature"
Cohesion: 0.18
Nodes (8): Score Tracking Change Proposal, Game Loop Spec Delta (Score Tracking), Score Tracking Spec Delta, Score Tracking Tasks, main() Function, playGame() Function, renderScoreboard() Function, Score Tracking Specification

### Community 3 - "Spec Sync & Archive"
Cohesion: 0.38
Nodes (6): OPSX Archive Command, OPSX Sync Command, OpenSpec Archive Change Skill, OpenSpec Sync Specs Skill, Delta Spec Format, Main Spec Format

### Community 4 - "Project Configuration"
Cohesion: 0.50
Nodes (4): Archived Change: Score Tracking, Archived Change: Tic-Tac-Toe Game, OpenSpec Config (spec-driven schema), Tic-Tac-Toe Project

### Community 5 - "Game Board Module"
Cohesion: 0.50
Nodes (3): createBoard() Function, Game Board Specification, renderBoard() Function

### Community 6 - "Player Input Handling"
Cohesion: 0.50
Nodes (3): Player Turns Spec Delta, Player Turns Specification, promptMove() Function

### Community 7 - "Win Detection Logic"
Cohesion: 0.50
Nodes (4): Win Detection Spec Delta, checkWinner() Function, isBoardFull() Function, Win Detection Specification

### Community 8 - "Package Metadata"
Cohesion: 0.50
Nodes (3): name, type, version

### Community 10 - "Initial Game Proposal"
Cohesion: 0.67
Nodes (3): Tic-Tac-Toe Game Change Proposal, Game Board Spec Delta, Tic-Tac-Toe Game Tasks

## Knowledge Gaps
- **13 isolated node(s):** `WIN_TRIPLETS`, `name`, `version`, `type`, `OpenSpec Config (spec-driven schema)` (+8 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 23 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Game Loop Specification` connect `Game Loop Spec` to `Score Tracking Feature`, `Game Board Module`, `Player Input Handling`, `Win Detection Logic`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `Game Board Specification` (e.g. with `Game Board Spec Delta` and `createBoard() Function`) actually correct?**
  _`Game Board Specification` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `WIN_TRIPLETS`, `name`, `version` to the rest of the system?**
  _13 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `Score Tracking Specification` connect `Score Tracking Feature` to `Game Loop Spec`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `Game Loop Specification` (e.g. with `Game Loop Spec Delta (Score Tracking)` and `Game Loop Spec Delta (Initial)`) actually correct?**
  _`Game Loop Specification` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Why does `Game Board Specification` connect `Game Board Module` to `Game Loop Spec`, `Initial Game Proposal`, `Player Input Handling`, `Win Detection Logic`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._