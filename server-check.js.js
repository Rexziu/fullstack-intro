// backend/server-check.js
const http = require('http');

const server = http.createServer((req, res) => {
    // This represents the BACKEND sending a response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Backend is Online: Request Received from Client!');
});

server.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
    console.log('Press Ctrl+C to stop');
});