const http = require('http');
const url = require('url');
const followRedirects = require('follow-redirects').http;

const fetchTitle = (address) => {
    return new Promise((resolve, reject) => {
        const req = followRedirects.get(address.startsWith('http://') ? address : `http://${address}`, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                const match = data.match(/<title>(.*?)<\/title>/i);
                const title = match ? match[1] : 'NO RESPONSE';
                resolve(`${address} - "${title}"`);
            });
        });

        req.on('error', (err) => {
            resolve(`${address} - NO RESPONSE`);
        });

        req.end();
    });
};


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/I/want/title/' && req.method === 'GET') {
        const addresses = [].concat(query.address || []);

        Promise.all(addresses.map(fetchTitle)).then((titles) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let html = '<html><head></head><body>';
            html += '<h1> Following are the titles of given websites: </h1>';
            html += '<ul>';
            titles.forEach((title) => {
                html += `<li> ${title} </li>`;
            });
            html += '</ul></body></html>';
            res.end(html);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
