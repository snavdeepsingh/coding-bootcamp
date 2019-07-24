var fs = require("fs");
var userSearch = require("./UserSearch2.js");


class WeatherAdmin{
    constructor(){

    }

    getData(){
        fs.readFile("log.txt", "utf8", (err,data)=>{
            if(err) console.log(err);

            console.log(data);
        })
    }

    newUserSearch(name,location,cb){
        var newSearch = new userSearch(name,location);
        var logInfo = (`
        Name:       ${newSearch.name}
        Location:   ${newSearch.location}
        Date:       ${newSearch.date} 
        ===========================
        
        `)
        fs.appendFile("log.txt", logInfo, cb);
        newSearch.getWeather(name,location);
    }
}
       
   module.exports = WeatherAdmin;