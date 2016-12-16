"use strict";
var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, '/client')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/client', 'index.html'));
});
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
    console.log('listening on port 8000 or another environment.');
});
