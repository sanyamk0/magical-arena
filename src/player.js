// Implemented Player Class that can be exported to other files
class Player {
  // Constructor that initializes the player's name, health, strength, and attack
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  // Function that rolls a die and returns a random number from 1 to 6
  rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Function that calculates health based on the damage taken
  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }

  // Function that checks if the player is alive
  isAlive() {
    return this.health > 0;
  }
}

// Export the Player class
module.exports = Player;
