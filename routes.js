const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url; 
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>My App</title>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method == 'POST') {
        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck);
        });

        return req.on('end', (chunck) => {
            const parsedBody = Buffer.concat(body).toString();
            const msg = parsedBody.split('=')[1];
            fs.writeFile('message.txt', msg, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My App</title>')
    res.write('<body><h1>From server side</h1><body>')
    res.write('</html>')

}


module.exports = requestHandler;