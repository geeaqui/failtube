var express = require('express');
var app = express();
var router = require('./config/routes');
var layouts = require('express-ejs-layouts');

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(layouts);
app.use(router);

app.listen(port, function(){
	console.log('Failtube is live and listening on port ' + port);
});