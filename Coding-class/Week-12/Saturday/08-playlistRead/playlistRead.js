var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // queryAllSongs();
  // createSong();
  // updateSong();
  deleteSong();
});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
  queryDanceSongs();
}

function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
}

function createSong(){
  console.log("Inserting a new song....\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Bon Bon",
      artist: "Pitbull",
      genre: "Pop"
    },
    function(err, res){
      console.log(res.affectedRows + "song inserted");
    }
  );
  console.log(query.sql);
  connection.end();
}

function updateSong(){
  console.log("Updating song data....\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [{
      genre: "Pop/Hip-hop"
    },
    {
      title: "Bon Bon"
    }],
    function(err,res){
      console.log(res.affectedRows + "genre updated");
    }
  );
  console.log(query.sql);
  connection.end();
}

function deleteSong(){ 
  console.log("Deleting song Data...\n");
  var query = connection.query(
    "DELETE FROM songs WHERE ? ",
    {
      title: "Bon Bon"
    },
    function(err,res){
      if(err) console.log(err);
      console.log(res.affectedRows + "Bon Bon Deleted");
    } 
  );
  queryAllSongs();
}