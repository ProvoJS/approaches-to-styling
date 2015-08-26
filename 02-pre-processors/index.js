var fs = require("fs");
var path = require("path");
var express = require('express');
var app = express();
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname + '/public')));


/* GET home page. */
app.param('username', function (req, res, next, username) {
	req.username = username;
  console.log('CALLED ONLY ONCE');
  next();
})

app.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

app.get('/user/:username', function(req, res, next) {
  res.render('index', { title: req.username });
});

app.get('*', function(req, res){
  res.render('error', { title: 'error' });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost:' + port);
});