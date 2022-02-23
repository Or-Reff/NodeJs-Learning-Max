const fs = require('fs'); // requiring file system usage
const requestHandler = (req,res) =>{  // handling the http requests in the url 
    const url = req.url;
    const method = req.method;

    if(url === '/'){ // for example localhost:8200/
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('<html>');
        return res.end();
    };
    if(url === '/message' && method === 'POST'){ // for example localhost:8200/message
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk)
        });
        req.on('end', () => {  // event listener   
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]; 
            fs.writeFileSync('message.txt',message , err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            }); // nodejs doesn't wait on functions to be executed so we put it here

        });
    
    };
    res.setHeader('Content-Type','text/html'); // setting it to be able to use html
    res.write('<html>');
    res.write('<head><title>MyFirstPage</title></head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('<html>');
    return res.end(); // sending back the response to the server.
};

///module exports - way 1 
// module.exports = {  // we assign the exported to the line require() in app.js // line 2
//     handler: requestHandler,  // key = handler , value = requestHandler function
//     someText: 'Some hard coded text'
// };
///module exports - way 2

exports.handler = requestHandler;  // short from modules.exports
exports.someText = 'Some hard coded text';