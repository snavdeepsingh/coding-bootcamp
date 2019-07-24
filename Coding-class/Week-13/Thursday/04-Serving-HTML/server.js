// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  let path = req.url;

  switch (path) {
    case "/Home":
      return displayIndex(path, req, res);

    case "/FavoriteFoods":
      return displayFood(path, req, res);

    case "/FavoriteMovies":
    return displayMovies(path, req, res);

    case "/Frameworks":
    return displayFramework(path, req, res);

    default:
      return display404(path, req, res);
  }
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});

function displayIndex(url, req, res){
 // Here we use the fs package to read our index.html file
 fs.readFile(__dirname + "/index.html", function(err, data) {

  // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
  // an html file.
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});
}

function displayFood(url, req, res){
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/food.html", function(err, data) {
 
   // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
   // an html file.
   res.writeHead(200, { "Content-Type": "text/html" });
   res.end(data);
 });
 }

 function displayMovies(url, req, res){
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/movies.html", function(err, data) {
 
   // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
   // an html file.
   res.writeHead(200, { "Content-Type": "text/html" });
   res.end(data);
 });
 }

 function displayFramework(url, req, res){
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/frameworks.html", function(err, data) {
 
   // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
   // an html file.
   res.writeHead(200, { "Content-Type": "text/html" });
   res.end(data);
 });
 }

 function display404(url, req, res) {
  // fs.readFile(__dirname + "/.html", function(err, data) {
 
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 not found");
  // });
}