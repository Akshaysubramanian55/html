const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const name="jancy";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(` Hello ${name} Server running at http://${hostname}:${port}/`);
});

//npm init 
//create server.js file
// if any changes we HAVE TO RESTART the server manually to overcome this we have a npm package called nodemon.it restarts the server automaticallly when the server file is saved
//npm install nodemon
//delete nodemodules =>and then npm instal will generate nodemodules