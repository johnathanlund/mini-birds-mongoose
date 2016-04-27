var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Sighting = require('./Sighting');
var SightingCtrl = require('./sightingCtrl');

var port = 3000;
var app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.set("debug", true);
mongoose.connect('mongodb://localhost/birds-mongoose');



app.post('/sighting', SightingCtrl.create);
app.get('/sighting', SightingCtrl.read);
app.put('/sighting/:id', SightingCtrl.update);
app.delete('/sighting/:id', SightingCtrl.delete);

app.listen(port, function() {
  console.log("Started server on port", port);
});
