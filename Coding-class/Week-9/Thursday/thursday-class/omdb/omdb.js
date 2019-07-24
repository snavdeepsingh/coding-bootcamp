let request = require('request-promise');

let args = process.argv.slice(2).join("+");

request("http://www.omdbapi.com/?t=" + args + "&r=json&plot=short&apikey=trilogy")
    .then(response => {
        let data = JSON.parse(response);
        console.log(data.Year)
    })