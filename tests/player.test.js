const Player = require("../src/player");

// Define a Jest test case named "Player initialization"
test("Player initialization", () => {
  // Creating Player with name, health, strength and attack
  const player = new Player("Player A", 50, 5, 10);
  // Assert that the attributes of the player are initialized correctly
  expect(player.name).toBe("Player A");
  expect(player.health).toBe(50);
  expect(player.strength).toBe(5);
  expect(player.attack).toBe(10);
});

// Define a Jest test case named "Player rollDie method"
test("Player rollDie method", () => {
  const player = new Player("Player A", 50, 5, 10);
  const roll = player.rollDie();
  // Assert that the roll result is within the expected range (1 to 6)
  expect(roll).toBeGreaterThanOrEqual(1);
  expect(roll).toBeLessThanOrEqual(6);
});

// Define a Jest test case named "Player takes damage"
test("Player takes damage", () => {
  const player = new Player("Player A", 50, 5, 10);
  // Call the takeDamage method to simulate taking damage of 20 points
  player.takeDamage(20);
  // Assert that the player's health has decreased by 20 points
  expect(player.health).toBe(30);
});

// Define a Jest test case named "Player health does not go below 0"
test("Player health does not go below 0", () => {
  const player = new Player("Player A", 50, 5, 10);
  // Call the takeDamage method to simulate taking damage of 60 points
  player.takeDamage(60);
  // Assert that the player's health cannot go below 0 (it should be capped at 0)
  expect(player.health).toBe(0);
});

// Define a Jest test case named "Player isAlive method"
test("Player isAlive method", () => {
  const player = new Player("Player A", 50, 5, 10);
  // Assert that the player is initially alive
  expect(player.isAlive()).toBe(true);
  // Call the takeDamage method to simulate taking damage of 50 points (which reduces health to 0)
  player.takeDamage(50);
  // Assert that the player is no longer alive after health drops to 0
  expect(player.isAlive()).toBe(false);
});
