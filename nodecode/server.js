const http = require('http');

 

const hostname = '127.0.0.1';
// const port = 21;

 

// const port = 23;

 

const port = 9090;
const server = http.createServer((req, res) => {
    res.statusCode = 200; //server could process the request properly
    res.setHeader('Content-Type', 'text/plain'); //text/plain :: server is responding with text data
    res.end('Hello World123 on the browser\n'); //what is the response from the server
  });
  server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
    console.log("Consoles Hello World");
    console.log("Consoles Hello World123");
  });