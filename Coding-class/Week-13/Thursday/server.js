// const http = require("http");
// const PORT = 8080;




// let server = http.createServer((req, res) => {
//     if(req.url.includes("path")){
//         res.end("you found the path");
//     }

//     res.end("it works: "+ req.url);
// })

// server.listen(PORT, () => console.log("server running on " + PORT));


// ====================================================

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.


const http = require("http");
const PORT_ONE = 7000;
const PORT_TWO = 7500;



let serverONE = http.createServer((req, res) => {
    res.end("YOU ARE A GENIUS"+ req.url);
})

serverONE.listen(PORT_ONE, () => console.log("server running on " + PORT_ONE));


let serverTWO = http.createServer((req, res) => {
    res.end("YOU ARE A FOOL"+ req.url);
})

serverTWO.listen(PORT_TWO, () => console.log("server running on " + PORT_TWO));


// ===================================================================================
