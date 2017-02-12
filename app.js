var express = require('express');
var app = express();
var router = require('./config/routes');
var layouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

//connect to the database
mongoose.connect('mongodb://localhost/posts', function(){
	console.log('db connected');
});

// tell express to use ejs for rendering templates
app.set('view engine', 'ejs');

//import internal files
app.use(express.static('public'));

// body parser
app.use(bodyParser.urlencoded({extended:false}));

// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

// use express layouts middleware too
app.use(layouts);

// add the router last
app.use(router);

app.listen(port, function(){
	console.log('Failtube is live and listening on port ' + port);
});

module.exports = app;