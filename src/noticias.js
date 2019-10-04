var http = require('http');

let server = http.createServer((req, res) => {
    let categoria = req.url;

    let body;
    if(categoria == '/tecnologia') {
        body = '<html><body>Noticias de tecnologia</body></html>';
    } else if(categoria == '/moda') {
        body = '<html><body>Noticias de moda</body></html>';
    } else if (categoria == '/beleza') {
        body = '<html><body>Noticias de beleza</body></html>';
    } else {
        body = '<html><body>Portal de noticias</body></html>';
    }

    res.end(body)
});

server.listen(3000)