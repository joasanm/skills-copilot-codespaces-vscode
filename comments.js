// create web server
// run node comments.js
// open browser and go to http://localhost:8080

var http = require('http');
var url = require('url');

var comments = [];

var server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  if (path === '/comments') {
    if (method === 'GET') {
      var string = JSON.stringify(comments);
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json;charset=utf-8');
      response.write(string);
      response.end();
    } else if (method === 'POST') {
      var comment = query.comment;
      comments.push(comment);
      response.statusCode = 200;
      response.end();
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

server.listen(8080, function() {
  console.log('Server is running...');
});