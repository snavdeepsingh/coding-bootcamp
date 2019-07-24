var weather = require("weather-js");



class userSearch {
    constructor(name, location){
        this.name = name;
        this.location = location;
        this.date = Date.now();
    }
    getWeather(){
        weather.find({search: this.location, degreeType: "F"}, (err,data)=>{
            if(err) console.log(err);
            
            console.log(`
            Name: ${this.name}
            Location: ${this.location}
            Weather: ${JSON.stringify(data[0].current.temperature,null, 2)}
            Date:       ${this.date}`);
        })
    }

}

// let newUser = new userSearch(name,location);

// newUser.getWeather(name,location);

module.exports = userSearch;