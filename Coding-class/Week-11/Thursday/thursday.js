// function Animal(species){
//     this.species = species;
// }

// Animal.prototype.getSpecies = function(){
//     console.log(this.species);
// }

// function Bird(bird){
//     this.species = bird;
// }

// Bird.prototype = Object.create(Animal.prototype, {});

// console.log(Bird.prototype);

// let myBat = new Bird("Parrot");
// myBat.getSpecies();

// Animal.prototype.sayHello = function(){
//     console.log("Hello");
// }

// myBat.sayHello();





// ============================================================
 var inquirer = require("inquirer");




class Player {
    constructor(name,position,offense,defense){
        this.name = name;
        this.position = position;
        this.offense = offense;
        this.defense = defense;
    }

    
    goodGame(){
        let coinFlip = (Math.floor(Math.random() * 2) == 0);
        if(coinFlip){
            this.offense++;
        }else{
           this.defense++; 
        }
    }

    badGame(){
        let coinFlip = (Math.floor(Math.random() * 2) == 0);
        if(coinFlip){
            this.offense--;
        }else{
           this.defense--; 
        }
    }

    printStats(){
        console.log(`
        Name:       ${this.name}
        Position:   ${this.position}
        Offense:    ${this.offense}
        Defense:    ${this.defense} 
        `)
    }

}


var team = [];
var starter = [];
var sub = [];


var playerSetup = function(count){

    if(count > 0){
        inquirer.prompt([
            {
              name: "name",
              message: "What is your name?"
            }, {
              name: "position",
              message: "What is your current position?",
              
            }, {
              name: "offense",
              message: "What is player's offense?",
              validate: (arg) => (isNaN(arg)===false && parseInt(arg)>0 && parseInt(arg)<11) ? true : false,
            }, {
              name: "defense",
              message: "What is player's Defense?",
              validate: (arg) => (isNaN(arg)===false && parseInt(arg)>0 && parseInt(arg)<11) ? true : false,
            }
          ]).then(function(answers) {
            // initializes the variable newguy to be a programmer object which will
            // take in all of the user's answers to the questions above
            var newPlayer = new Player(
              answers.name,
              answers.position,
              answers.offense,
              answers.defense);
            // pushes newguy object into our array
            if(count <= 2){
                starter.push(newPlayer);
                team.push(newPlayer); 
            }else {
                team.push(newPlayer);
                sub.push(newPlayer);
            }
            // add one to count to increment our recursive loop by one
           
            // run the askquestion function again so as to either end the loop or ask the questions again
            playerSetup(--count);
          });
          // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
        }
        else {
          for (var x = 0; x < team.length; x++) {
            team[x].printStats();
          }
        }
      };
      
      // call askQuestion to run our code
      playerSetup(3);
      