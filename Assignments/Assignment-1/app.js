// in app.js needs to require http requests and routes 
// creating server and listening to a server
const http = require('http');
const routes = require('./routes');


const server = http.createServer(routes.handler);

server.listen(8001 , ()=>{ console.log("Server is up! Assignment");});