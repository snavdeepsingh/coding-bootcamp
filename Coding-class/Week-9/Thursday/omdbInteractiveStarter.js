// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...


// Grab or assemble the movie name and store it in a variable called "movieName"
// var movieName = "";
// movieName = process.argv[2];
// ...


// Then run a request to the OMDB API with the movie specified
// var queryUrl = ;


// This line is just to help us debug against the actual URL.
// console.log(queryUrl);


// Then create a request to the queryUrl
// ...
// var request = require("request-promise");
// var arg = process.argv[2];

// request("http://www.omdbapi.com/?t=" + arg + "&y=&plot=short&apikey=trilogy")
//     .then(response =>{
//         let data = JSON.parse(response);
//         console.log(data.Title,data.Year,data.Actors);
//     })

    

// If the request is successful
// ...

// Then log the Release Year for the movie
// ...

let request = require("request-promise");
let arg = process.argv.splice(2).join("+");

request("http://www.omdbapi.com/?t=" + arg + "&y=&plot=short&apikey=trilogy")
    .then(e => {
        let data = JSON.parse(e);
        console.log(data.Title, data.Actors);
    })