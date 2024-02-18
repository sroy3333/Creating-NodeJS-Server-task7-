const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    
    let responseText = '';
    if (req.url === '/home') {
        responseText = 'Welcome home';
    } else if (req.url === '/about') {
        responseText = 'Welcome to About Us page';
    } else if (req.url === '/node') {
        responseText = 'Welcome to my Node.js project';
    } else {
        responseText = 'Page not found';
    }

   res.setHeader('content-type', 'text/plain');
    res.write(responseText);
    res.end();
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
