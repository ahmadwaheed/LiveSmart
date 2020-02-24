var http = require('http');

//These parameters are already passed into a function
function onRequest(req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello My Node Application');
  res.end();
}

http.createServer(onRequest).listen(8000);
