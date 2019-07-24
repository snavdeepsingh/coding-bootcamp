let fs = require("fs-extra");
let arg = process.argv[2];

fs.appendFile("best_things_ever.txt", arg)
    .then(()=> fs.readFile('best_things_ever.txt', 'utf8'))
    .then(function(data){
       console.log(data.split(","));
    })
    .catch(function(err){
        if(err){
            console.log(err);
        }
    })