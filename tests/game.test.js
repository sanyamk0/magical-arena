const Player = require("../src/player");
const simulateFight = require("../src/game");

// Define a Jest test case named "Simulate fight"
test("Simulate fight", () => {
  // Creating Players with name, health, strength and attack
  const playerA = new Player("Player A", 50, 5, 10);
  const playerB = new Player("Player B", 100, 10, 5);

  // Simulating the Fight
  const winner = simulateFight(playerA, playerB);

  // Assert that the winner's name (returned by simulateFight) matches either "Player A" or "Player B"
  expect(winner).toMatch(/Player A|Player B/);
});
