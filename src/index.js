const Player = require("./player");
const simulateFight = require("./game");

// Creating Players with name, health, strength and attack
let playerA = new Player("Player A", 50, 5, 10);
let playerB = new Player("Player B", 100, 10, 5);

// Simulating the Fight
simulateFight(playerA, playerB);
