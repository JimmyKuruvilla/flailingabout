var express = require('express');
var app = express();
var path = require('path');
var util = require('util');

app.get('/', express.static(path.join(__dirname, '../', 'src')));

app.get('/*/*.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', req.url));
});

app.listen(8080, () => {
  console.log('listnening ');
});
