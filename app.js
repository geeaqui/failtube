var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('Failtube is live and listening on port ' + port);
});