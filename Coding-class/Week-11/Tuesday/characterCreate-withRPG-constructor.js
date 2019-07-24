function Character(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;

  this.printStats = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession +
    "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
    this.strength + "\nHitPoints: " + this.hitpoints);
    console.log("\n-------------\n");
  };

  this.isAlive = function() {
    if (this.hitpoints > 0) {
      console.log(this.name + " is still alive!");
      console.log("\n-------------\n");
      return true;
    }

    console.log(this.name + " has died!");
    return false;
  };

  this.attack = function(opponent) {
    opponent.hitpoints -= this.strength;
  };

  this.levelUp = function() {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  };
}

var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();


while (warrior.isAlive() === true && rogue.isAlive() === true) {
  warrior.attack(rogue);
  rogue.attack(warrior);

  warrior.printStats();
  rogue.printStats();
}
