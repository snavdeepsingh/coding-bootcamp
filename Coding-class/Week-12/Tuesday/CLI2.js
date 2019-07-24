
var  WeatherAdmin = require("./WeatherAdmin2.js")

var loginType = process.argv[2];
var userName = process.argv[3];
var userLocation = process. argv[4];


var myAdmin = new WeatherAdmin();




// newUser.getWeather(name,location);


if(loginType === "admin"){
    myAdmin.getData();
} else {
    myAdmin.newUserSearch(userName,userLocation,myAdmin.getData);
}