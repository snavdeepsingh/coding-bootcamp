// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer
    .prompt([{
            type: "input",
            message: "What's your Name?",
            name: "username"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        {
            type: "password",
            message: "Set your password",
            name: "Password"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        {
            type: "list",
            message: "Which level do you choose?",
            choices: ["level-1", "level-2", "level-3", "level-4", "level-5"],
            name: "Angry-Bird"
        }

    ])
    .then(function(inquirerResponse){
        if(inquirerResponse.confirm)
    })