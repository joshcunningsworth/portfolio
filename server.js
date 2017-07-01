var express = require('express');
var app = express();
var path = require('path');
var HTTP_PORT = process.env.PORT || 8080;

app.engine(".hbs", exphbs({
    extname: ".hbs",
    defaultLayout: 'layout',
}));
app.set("view engine", ".hbs");

function onhttpstart() {
    console.log("It's listening on " + HTTP_PORT);
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/test.html"));
})

//app.get('/index', function(req, res){
//    res.sendFile(path.join(__dirname+"/index.html"));
//})

app.listen(HTTP_PORT, onhttpstart);