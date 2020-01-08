const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        });

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    res.end(content);
                }
            )
        } else if (req.url === '/about') {
            console.log(2);
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) throw new Error(err);

                    res.end(content);
                }
            )
        } else if (req.url === '/api/users') {
            res.writeHead(200, {
                'Content-Type': 'text/json',
            });

            const users = [
                { name: 'Alex', age: 21 },
                { name: 'Dan', age: 21 },
            ];

            res.end(JSON.stringify(users));
        }

        res.end(`
            <form method="post" action="/">
                <h1>Form</h1>
                <input type="text" name="title">
                <button type="submit">Send</button>
            </form>
        `)
    } else if (req.method === 'POST') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        });

        const body = [];

        req.on('data', data => {
            body.push(Buffer.from(data));
        });

        req.on('end', () => {
            const msg = body.toString();

            res.end(`
                <h1>Ваше сообщение: ${msg}</h1> 
            `)
        })


    }
});

server.listen(3000, () => {
    console.log('Server is running...');
});