function simulateFight(player1, player2) {
  let attacker = player1.health <= player2.health ? player1 : player2; // Determine who attacks first based on whose health is lower
  let defender = player1.health > player2.health ? player1 : player2; // Determine who defends first based on whose health is higher

  // Simulate the fight until one of the players is no longer alive
  while (player1.isAlive() && player2.isAlive()) {
    let attackRoll = attacker.rollDie(); // Roll die for the attacker
    let defendRoll = defender.rollDie(); // Roll die for the defender

    let attackDamage = attacker.attack * attackRoll; // Calculate the damage dealt by the attacker
    let defendStrength = defender.strength * defendRoll; // Calculate the strength of the defender

    // Calculate the overallDamage by the attacker
    // It can be negative if the defendStrength is higher than the attackDamage
    let overallDamage = attackDamage - defendStrength;

    // If the overallDamage is positive, the attack was successful
    // If the overallDamage is negative, the attack was defended
    if (overallDamage > 0) {
      defender.takeDamage(overallDamage);
      console.log(
        `${attacker.name} attacks ${defender.name} for ${overallDamage} damage! ${defender.name} has ${defender.health} health left.`
      );
    } else {
      console.log(
        `${attacker.name} attacks ${defender.name} but the attack was defended! ${defender.name} has ${defender.health} health left.`
      );
    }
    [attacker, defender] = [defender, attacker]; // Switching the attacker and defender for the next round
  }

  let winner = player1.isAlive() ? player1 : player2; // Determine the winner of the fight after one of the players is no longer alive
  console.log(`${winner.name} won the fight!!🎉🎉`);
  return winner.name; // Return the name of the winner
}

// Export the simulateFight function
module.exports = simulateFight;
