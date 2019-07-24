let fs = require('fs-extra');
let argument = process.argv[2];

fs.appendFile("things.txt", " " + argument)
    .then(data => fs.readFile("things.txt", "utf8"))
    .then(data => console.log(data))
    .catch(err => console.log(err));

fs.appendFile("things.txt")
    .then(function(data){
        return fs.readFile("things.txt", "utf8");
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        if( err )
            console.log(err);
    })