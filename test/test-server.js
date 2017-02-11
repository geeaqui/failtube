var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);

describe('API routes for the failtube resources', function(){
	it("should display all the list of video on / GET", function(done){
		var request = chai.request(app);
		request
			.get('/')
			.end(function(err, res){
				res.should.have.status(200);
				res.should.be.html;
				res.text.should.match(/FailTube/);
				res.text.should.match(/add video/);
				done();
			});
	});

	it("should display selected video from the list on /:id GET", function(done){
		var request = chai.request(app);
		request
			.get('/0')
			.end(function(err, res){
				if(err) return res.status(404).send('Page not found')
				res.should.have.status(200);
			});
	});
});