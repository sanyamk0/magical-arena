# Magical Arena - Swiggy Assignment

## Description

This project simulates a magical arena where two players fight until one of them dies. Each player has health, strength, and attack attributes. Players attack in turns. Attacking player rolls the attacking dice and the defending player rolls the defending dice. The “attack” value multiplied by the outcome of the attacking dice roll is the damage created by the attacker. The defender “strength” value, multiplied by the outcome of the defending dice is the damage defended by the defender. Whatever damage created by attacker which is in excess of the damage defended by the defender will reduce the “health” of the defender. Game ends when any player's health reaches 0.

## How to Run

1. Install dependencies: `npm install`
2. Run the simulation: `node src/index.js`
3. Run tests: `npm test`

## Project Structure

- `src/`: Contains the source code.
  - `game.js`: Contains the game logic.
  - `index.js`: Entry point for the application.
  - `player.js`: Defines the Player class.
- `tests/`: Contains unit tests.
  - `game.test.js`: Tests for the game logic.
  - `player.test.js`: Tests for the Player class.

## Commit Messages

1. Initialise Arena Project
2. Player Class
3. Game Logic for Simulating Fight
4. Run Arena using index.js
5. Added Unit Test for simulateFight
6. Added Unit Test for Player Class
7. Added Readme.md
