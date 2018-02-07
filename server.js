var express = require('express');
var app = express();
var path = require('path');
var HTTP_PORT = process.env.PORT || 8080;
var exphbs = require('express-handlebars');

app.use(express.static('public'));

app.engine(".hbs", exphbs({
    extname: ".hbs",
    defaultLayout: 'layout',
    //helpers: {}
}));
app.set("view engine", ".hbs");

function onhttpstart() {
    console.log("listening on " + HTTP_PORT);
}

app.get('/', function(req, res){
    res.render("home");
})

app.get('/about', function(req, res){
    res.render("about");
})

//app.get('/index', function(req, res){
//    res.sendFile(path.join(__dirname+"/index.html"));
//})

app.listen(HTTP_PORT, onhttpstart);
