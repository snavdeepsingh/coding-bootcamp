var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Starwars" model that matches up with DB
var character = sequelize.define("character", {
  routename: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER(11)
  },
  forcePoints: {
    type: Sequelize.INTEGER(11)
  },
}, {
  timestamps: false
});

// Syncs with DB
character.sync();

// Makes the Starwars Model available for other files (will also create a table)
module.exports = character;