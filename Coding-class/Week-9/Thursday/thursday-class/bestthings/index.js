let fs = require('fs-extra');

fs.readFile('best-things-ever.txt', "utf8", function (err, data) {
    if (err)
        return console.log(err);

    let things = data.split(",");

    for (let index = 0; index < things.length; index++) {
        console.log(things[index]);   
    }
})

fs.readFile('best-things-ever.txt', "utf8", function (err, data) {
    if (err)
        return console.log(err);

    let things = data.split(",");

    things.forEach(function (item) {
        console.log(item)
    })
})

fs.readFile('best-things-ever.txt', "utf8")
    .then(function (data) {
        let things = data.split(",");
        things.forEach(function (item) {
            console.log(item)
        })
    })
    .catch(err => console.log(err))

fs.readFile('best-things-ever.txt', "utf8")
    .then(data => {
        let things = data.split(",");
        things.forEach(item => console.log(item))
    })