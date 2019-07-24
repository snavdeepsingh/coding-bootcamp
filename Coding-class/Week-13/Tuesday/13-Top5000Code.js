var mysql = require("mysql");
var inquirer = require("inquirer");



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "top_songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startSearch();
    // connection.end();
});

function startSearch(){
    inquirer.prompt([
        {
            type: "list",
            name: "songSearch",
            message: "Choose from following options",
            choices: ["Songs by an Artist", "Artist with more than one song in top 5000","specific range", "Search a song","End Search"]
        }
    ]).then(function(answers){
        // console.log(answers);
        switch(answers.songSearch){
            case "Songs by an Artist":
            console.log("hello 1");
            break;
    
            case "Artist with more than one song in top 5000":
            console.log("hello 2");
            break;
    
            case "specific range":
            console.log("hello 3");
            break;
    
            case "Search a song":
            console.log("hello 4");
            break;

            case "End Search":
            connection.end();
            break;
        }
    })
}

