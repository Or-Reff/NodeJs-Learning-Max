const http = require('http'); // using http module ספריה
const routes = require('./routes'); // gets the requestHandler from routes.js

console.log(routes.someText);

const server = http.createServer(routes.handler);  //from routes gets the handler property 

server.listen(8000, ()=> {console.log('Server is up!'); }); // listening on port 8000