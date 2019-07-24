let fs = require('fs-extra');
let argument = process.argv[2];

fs.appendFile("things-list.txt", argument)
    .then( () => fs.readFile("things-list.txt", "utf8") )
    .then( data => console.log(data) )
    .catch(err => console.log(err) )

// fs.appendFile("things-list.txt", argument)
//     .then(function(){
//         return fs.readFile("things-list.txt", "utf8");
//     })
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(err => console.log(err))