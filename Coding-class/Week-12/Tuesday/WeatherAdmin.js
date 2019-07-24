var fs = require("fs");
var userSearch = require("./UserSearch.js");
var name = process.argv[2];
var location = process.argv[3];


var  WeatherAdmin = function(){
   
    this.getData = function(){
        fs.readFile("log.txt", "utf8", (err,data)=>{
            if(err){
                console.log(err)
            }
            console.log(data);
        })
    }


    this.newUserSearch = function(name,location,cb) {

        var newSearch = new userSearch(name, location);
        fs.appendFile("log.txt", `
        Name:       ${newSearch.name}
        Location:   ${newSearch.location}
        Date:       ${newSearch.date}       
        `, cb)

    }

   


}

let weatherTest = new WeatherAdmin();

weatherTest.newUserSearch(name,location,weatherTest.getData);



module.exports = WeatherAdmin;