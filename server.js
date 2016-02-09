// packages
// =============================================================================
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// config
// =============================================================================
var db = require('./config/db'); // get db route
var port = process.env.PORT || 8080; // set to 8080 or host port

mongoose.connect(db.database); // connect up to db

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
// =============================================================================
require('./routes')(app);

// server
// =============================================================================
app.listen(port);

console.log("Linked up and running on port " + port);

exports = module.exports = app;
