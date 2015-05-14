var express = require('express');
var inventory = require('./inventory.json');
var app = express();

app.use(express.static(__dirname));

app.get('/api/items', function(req, res) {
  res.send(inventory);
});

app.listen(4568);
