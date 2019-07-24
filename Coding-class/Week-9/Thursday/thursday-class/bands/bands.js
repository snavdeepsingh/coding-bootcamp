let fs = require('fs-extra');

fs.writeFile('bands.json', JSON.stringify(["Editors", "Mum", "Mew"]))
    .then(function (data) {
        return fs.readFile("bands.json");
    })
    .then(function(data){
        console.log(JSON.parse(data));
    })
    .catch(function (err) {
        console.log(err);
    })        
