var weather = require("weather-js");



class userSearch {
    constructor(name, location){
        this.name = name;
        this.location = location;
        this.date = Date.now();
    }
    getWeather(){
        weather.find({ search: this.location, degreeType: "F"}, (err, result)=>{
            if(err){
                console.log(err);
            }
            console.log(`
            Name:       ${this.name}
            Location:   ${JSON.stringify(result, null, 2)}
            Date:       ${this.date}       
            `);
        })
       }; 
}

   

// var newUser = new userSearch(name, location);
// newUser.getWeather();

module.exports = userSearch;