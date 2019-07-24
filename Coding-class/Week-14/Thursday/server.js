var express = require("espress");

var app = express();

var PORT = process.env.PORT || 8080;


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

require("./apiRoutes")(app);





app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  