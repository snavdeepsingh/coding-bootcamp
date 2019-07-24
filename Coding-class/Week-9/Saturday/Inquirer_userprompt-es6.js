// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Check-box,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

let initialQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "confirm",
    name: "likesBooks",
    message: "Do you like books?"
  },
  {
    type: "input",
    name: "num",
    message: "Input a number.",
    validate: (arg) => parseInt(arg) ? true : false
  },
  {
    type: "list",
    name: "doWhat",
    message: "What should we do with the number?",
    choices: ["Square It", "Cube It", "Sqrt It"]
  }
];

let secondaryQuestions = [
  {
    type : "input",
    name : "favoriteBook",
    message : "What is your favorite book?"
  }
];

// Created a series of questions
inquirer.prompt(initialQuestions)
  .then(user => {
    console.log(user);
    // if( user.likesBooks ){
    //   return inquirer.prompt(secondaryQuestions).then(bookData => {
    //     switch (user.doWhat) {
    //       case "Square It":
    //         console.log(user.num ** 2)
    //         break;

    //       case "Cube It":
    //         console.log(user.num ** 3)
    //         break;

    //       case "Sqrt It":
    //         console.log(Math.sqrt(user.num));
    //         break;
    //     }

    //     if (bookData.favoriteBook.toLowerCase() === "Hitchhiker's Guide to the Galaxy".toLowerCase())
    //       console.log("We have the same favorite book!");
    //     else
    //       console.log(user.name + " favorite book is: " + bookData.favoriteBook)
    //   });;
    // }
    // else
    //   console.log("Lame.")
  })

