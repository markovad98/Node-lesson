const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.write('Hello, from Node.js');
    res.end(`
    <div style="background-color: blueviolet">Hello, from Node, bro!!!</div>
    `);
});

server.listen(3000, () => {
    console.log('Server is running...');
})