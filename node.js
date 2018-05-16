var http = require('http');
var datetime = require('./myfirstmodule');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('The current date time :' + datetime.myDateTime());
    // var q = url.parse(req.url, true).query;
    // var text = q.year + " "  + q.month;
    // res.write(text);
    fs.readFile('data.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen('8090');