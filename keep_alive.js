var http = require('http');

http.createServer(function (req, res) {
  res.write("Thanks for visiting! I am now online! But you can close this page if you want, I am 24/7 online!");
  res.end();
}).listen(8080);
