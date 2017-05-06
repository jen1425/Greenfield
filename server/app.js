require('dotenv').config();
var cors = require('cors');
var express = require('express');
var parser = require('body-parser');
var cookieParser = require('cookie-parser');
var partials = require('express-partials');
var router = require('./routers/routers');
var path = require('path');


var app = express();
app.set('port', process.env.PORT || 9000);

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

app.use(router);

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Server listening on port ' + app.get('port'));
}

module.exports.app = app;
