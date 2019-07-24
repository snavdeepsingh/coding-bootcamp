const http = require("http");
const PORT = 8080;

const server = http.createServer(handleRequest);

server.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));

function handleRequest(req, res) {
  let path = req.url;

  switch (path) {
    case "/":
      return displayRoot(path, req, res);

    case "/portfolio":
      return displayPortfolio(path, req, res);

    default:
      return display404(path, req, res);
  }
}

function displayRoot(url, req, res) {
  let myHTML = `
    <html>
      <body>
        <h1>Home Page</h1>
        <a href='/portfolio'>Portfolio</a>
      </body>
    </html>`;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
}

function displayPortfolio(url, req, res) {
  let myHTML = `
    <html>
      <body>
        <h1>My Portfolio</h1>
        <a href='/'>Go Home</a>
      </body>
    </html>`;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
}

function display404(url, req, res) {
  let myHTML =  `
    <html>
      <body>
        <h1>404 Not Found</h1>
        <p>The page you were looking for: ${url} can not be found</p>
     </body>
    </html>`;

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(myHTML);
}
