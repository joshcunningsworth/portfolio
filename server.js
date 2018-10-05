var express = require('express');
var app = express();
var path = require('path');
var HTTP_PORT = process.env.PORT || 8080;


app.use(express.static('public'));


function onhttpstart() {
    console.log("I'm listening on " + HTTP_PORT);
}

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../views/home.html"));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, "../views/about.html"));
});

app.get('/calctool', function(req, res){
    res.sendFile(path.join(__dirname, "../views/calctool.html"));
});

app.listen(HTTP_PORT, onhttpstart);
