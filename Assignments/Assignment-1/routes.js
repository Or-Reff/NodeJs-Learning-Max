// require fs (file system) and 
//creating new requestHandler(req,res) function which gets the url and method(post/get for example)
// res.setHeader() - setting the type of file for example we need to use html in back-end
//res.end() - sending back data
//exports the handler

const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>');
        res.write('Greetings!')
        res.write('</h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    
    if(url === '/users'){
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>')
        res.write('User1')
        res.write('</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.end();
}


exports.handler = requestHandler;