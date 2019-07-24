let request = require("request-promise");
let fs = require('fs-extra');

request("http://google.com", function (err, response, body) {
    if (err)
        return console.log(err);
        
    fs.writeFile("google.html", body);
})

request("http://google.com")
    .then(body => fs.writeFile("google.html", body))
    .catch(err => console.log(err));