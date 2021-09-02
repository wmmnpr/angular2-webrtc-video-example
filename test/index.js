var http = require('http');
http.createServer(function (req, res) {
  res.write('This is my local machine'); 
  res.end(); //end the response
}).listen(80); 