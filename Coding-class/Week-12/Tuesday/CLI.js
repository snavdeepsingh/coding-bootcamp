var userSearch = require("./UserSearch.js");
var weather = require("./WeatherAdmin.js");
var name = process.argv[2];
var location = process.argv[3];


var newUser = new userSearch(name, location);
var admin = new WeatherAdmin(name, location);

newUser.getWeather();
admin.newUserSearch();
admin.getData();