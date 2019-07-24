// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/", function(req, res) {
      var queryString = "SELECT * FROM chirps";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(res);
      });
  }   



  // Add a chirp


};
