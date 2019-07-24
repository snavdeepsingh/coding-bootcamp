// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API lists

var tableList = [
	{
		name: 'john',
		phone: '123',
		email: 'email@email.com'
	},
	{
		name: 'joy',
		phone: '123',
		email: 'email@email.com'
	},
	{
		name: 'jeff',
		phone: '123',
		email: 'email@email.com'
	},
	{
		name: 'jacob',
		phone: '123',
		email: 'email@email.com'
	},
];
var waitList = [];

// Routes

// Home
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// Table
app.get('/table', (req, res) => {
	res.sendFile(path.join(__dirname, 'table.html'));
});

// Reserve
app.get('/reserve', (req,res) => {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

// API Table List
app.get('/api/tableList', (req,res) => {
	return res.json(tableList);
});

// API Wait list
app.get('/api/waitList', (req,res) => {
	return res.json(waitList);
});


// Post to table list or wait list

app.post('/api/tableList', (req,res) => {
	let newPatron = req.body;

	console.log(newPatron);

	tableList.push(newPatron);
	
	res.json(newPatron);
});

app.post('/api/waitList', (req,res) => {
	let newPatron = req.body;

	console.log(newPatron);

	waitList.push(newPatron);

	res.json(newPatron);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});