var express = require('express');
var path = require('path');
var app = express();
app.use('/static', express.static(path.join(__dirname, '/client/dist')));

var IP = '127.0.0.1';
var port = 3000;

app.listen(port, function() {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/dist/myapp.html');
});
