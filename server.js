var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  fs.readFile('./index.html', function(error, content) {
    if (error) {
      response.writeHead(500);
      response.end(error.message);
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(content, 'utf-8');
    }
  });
});

server.listen(8000, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Listening on port 8000');
  }
});

