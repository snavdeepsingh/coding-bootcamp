// let dog = {
//     raining: true,
//     noise: "woof",
//     makeNoise(){
//        if(this.raining)
//        console.log(this.noise);
//     }
// }

// let cat = {
//     raining: false,
//     noise: "Meow",
//     makeNoise(){
//         if(this.raining)
//         console.log(this.noise);
//     }
// }

// dog.makeNoise();
// cat.raining = true;
// cat.makeNoise();

// function massHysteria(cat, dog){
//     if(cat.raining && dog.raining === true){
//         console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
//     }
// }

// massHysteria(cat, dog);

// =============================================================================


// class Character{
//     constructor(name, profession, gender, age, strength, hitPoints){
//         this.name = name;
//         this.profession = profession;
//         this.gender = gender;
//         this.age = age;
//         this.strength = strength;
//         this.hitPoints = hitPoints;
//     }

//     printStats(){
//         console.log(`
//         Name:           ${this.name}
//         Profession:     ${this.profession}
//         Gender:         ${this.gender}
//         Age:            ${this.age}
//         Strength:       ${this.strength}
//         HitPoints:      ${this.hitPoints}
//         `)
//     }

//     isAlive(){
//         if(this.hitPoints > 0){
//             console.log(`${this.name} is alive.`)
//         return true;
//         }
//         console.log(`${this.name} is dead.`)
//         return false;
//     } 

//     attack(opponent){
//         opponent.hitPoints -= this.strength;
        
//     }
        

// }


// var warrior = new Character('Warrior', 'Accountant', 'male', '30', '5', '90');
// var knight = new Character('Knight', 'Teacher', 'male', '35', '7', '100');

// warrior.printStats();
// knight.printStats();

// warrior.isAlive();
// knight.isAlive();

// ==============================================================================

// class DigitalPal{
//     constructor(){
//         this.hungry = false;
//         this.sleepy = false;
//         this.bored = true;
//         this.age = 0;
//     }
//     feed(){
//         if(this.hungry){
//             console.log("That was yummy!");
//             this.hungry = false;
//             this.sleepy = true;
//         }else {
//             console.log("No thanks! I am full");
//         }
//     }

//     sleep(){
//         if(this.sleepy){
//             console.log("Zzzzzzzzzz");
//             this.sleepy = false;
//             this.bored = true;
//             this.increaseAge();
//         }else {
//             console.log("No way! I am not tired");
//         }
//     }

//     play(){
//         if(this.bored){
//             console.log("Yay! lets play!");
//             this.bored = false;
//             this.hungry = true;
//         }else{
//             console.log("Not right now. Later?");
//         }
//     }
//     increaseAge(){
//             this.age++;
//             console.log(`Happy Birthday to me! I am ${this.age} years old!`);
//     }
// }

// var animals = {};

// animals.dog = new DigitalPal();

// animals.dog.outside = false;
// animals.dog.bark = function(){
//         console.log("woof-woof!");
//     }

// animals.dog.goOutside = function(){
//     if(!this.outside){
//         console.log("Yay! I am outside.");
//         this.outside = true;
//         this.bark();
//     } else{
//         console.log("We are alredy outside though...");
//     }
// }

// animals.dog.goInside = function(){
//     if(this.outside){
//         console.log("Do we have to? Fine...");
//         this.outside = true;
//     }else{
//         console.log("I am already inside...");
//     }
// }

// animals.cat = new DigitalPal();
// animals.cat.houseConditions = 100;

// animals.cat.meow = function(){
//         console.log("Meow! Meow!");
//     }

// animals.cat.destroyFurniture = function(){
//     if(this.houseConditions - 10 > 0){
//         this.houseConditions -= 10;
//         console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
//         this.bored = false;
//         this.sleeepy = true;
//     }
// }

// animals.cat.buyNewFurniture = function(){
//     this.houseCondition += 50;
//     console.log("Are you sure that's a good idea?");
// }

// var animal = process.argv[2];
// var methods = process.argv[3];

// animals[animal][methods]();

// ===============================================================================

// class DigitalPal{
//     constructor(){
//       this.hungry = false;
//       this.sleepy = false;
//       this.bored = true;
//       this.age = 0;
//     }
  
//     // method which feeds the digitalpal when they are hungry and sets them to sleepy
//     feed(){
//       if (this.hungry) {
//         console.log("That was yummy!");
//         this.hungry = false;
//         this.sleepy = true;
//       }
//       else {
//         console.log("No thanks, I'm full.");
//       }
//     };
  
//     // method which puts the digitalpal to sleep when they are sleepy, increases
//     // their age by one, and sets them to bored
//     sleep(){
//       if (this.sleepy) {
//         console.log("ZZzzZZZzzzZZz~~");
//         this.sleepy = false;
//         this.bored = true;
//         this.increaseAge();
//       }
//       else {
//         console.log("No way! I'm not tired!");
//       }
//     };
  
//     // method which allows the user to play with their digitalpal when they are bored and sets them to hungry
//     play(){
//       if (this.bored) {
//         console.log("Yay! Let's play!");
//         this.bored = false;
//         this.hungry = true;
//       }
//       else {
//         console.log("Not right now. Maybe later?");
//       }
//     };
  
//     // method which is called in "this.sleep" to increase the age of the digitalpal by one
//     increaseAge() {
//       this.age++;
//       console.log("Happy Birthday to me! I am " + this.age + " old!");
//     };
//   };
  
//   // Create a new animals object to contain our new Digital Pals
//   var animals = {};
  
//   // creates a new DigitalPal object with the name "dog"
//   animals.dog = new DigitalPal();
  
//   // adds the property "outside" to the "dog" object and sets it to false
//   animals.dog.outside = false;
  
//   // adds the method "bark" to the "dog" obeject which prints a message to the screen
//   animals.dog.bark = function() {
//     console.log("Woof! Woof!");
//   };
  
//   // adds the method "letoutside" to the "dog" obeject which lets "dog" outside when it is outside
//   animals.dog.letOutside = function() {
//     if (!this.outside) {
//       console.log("Yay! I love the outdoors!");
//       this.outside = true;
//       this.bark();
//     }
//     else {
//       console.log("We're already outside though...");
//     }
//   };
  
//   // adds the method "letinside" to the "dog" obeject which lets "dog" inside when it is outside
//   animals.dog.letInside = function() {
//     if (this.outside) {
//       console.log("Awwww... Do I have to?");
//       this.outside = false;
//     }
//     else {
//       console.log("We're already inside though...");
//     }
//   };
  
//   // creates a new DigitalPal object with the name "cat"
//   animals.cat = new DigitalPal();
  
//   // adds the proptery "housequality" to the "cat" object
//   animals.cat.houseQuality = 100;
  
//   // adds the "meow" method to the "cat" object which prints a message to the screen
//   animals.cat.meow = function() {
//     console.log("Meow! Meow!");
//   };
  
//   // adds the "destroyfurniture" method to the "cat" object which decreases the "animals.cat.housequality" value by ten
//   animals.cat.destroyFurniture = function() {
//     if (this.houseQuality - 10 > 0) {
//       this.houseQuality -= 10;
//       this.bored = false;
//       this.sleepy = true;
//       console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
//     }
//     else {
//       console.log("I've already destroyed it all!");
//     }
//   };
  
//   // adds the "buyNewFurniture" method to the "cat" object which increases the "animals.cat.houseQuality" value by fifty
//   animals.cat.buyNewFurniture = function() {
//     this.houseQuality += 50;
//     console.log("Are you sure that's a good idea?");
//   };
  
//   // Grabbing command line arguments for animal and method
//   var animal = process.argv[2];
//   var method = process.argv[3];
  
//   // try calling your chosen animal and method from the terminal example: 'node tamagotchi-this dog letInside'
//   animals[animal][method]();


// ==================================================