var express = require('express');
var app = express();
var router = require('./config/routes');

var port = process.env.PORT || 3000;

app.use(router);

app.listen(port, function(){
	console.log('Failtube is live and listening on port ' + port);
});