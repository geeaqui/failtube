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
				if(err) return res.status(500).send(err);
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
				if(err) return res.status(404).send('Page not found');
				res.should.have.status(200);
				res.should.be.html;
				res.text.should.match(/a video of a woman being smacked in the face with a fish/);

				done();
			});
	});

	it("should display forms to add new video /new", function(done){
		var request = chai.request(app);
		request.post('/')
			.set('content-type','application/x-www-form-urlencoded')
			.send({
				id:4,
	            title: "funny video",
			    description: "a very funny video",
			    url: "ITHKAu4xmNg",
			    failLevel: 7,
			    nsfw: false
          	})
		.end(function(err, res){
            res.should.have.status(200);
            res.should.be.html;
            res.text.should.match(/FailTube/);
            request
              .get('/4')
              .end(function(err, res){
                  res.should.have.status(200);
                  res.should.be.html;
                  res.text.should.match(/FailTube/);
                  done();
              });
          });

	});

	it('should update a SINGLE video on /<id> PUT' , function(done){
	    var request = chai.request(app);
	    request.put('/0')
	        .set('content-type', 'application/x-www-form-urlencoded')
	        .send({
	        	id: 0,
			    title: "epic fish fail",
			    description: "a video of a woman being smacked in the face with a fish",
			    url: "ITHKAu4xmNg",
			    failLevel: 7,
			    nsfw: false
	        })
	        .end(function(err, res){
	          res.should.have.status(200);
	          res.should.be.html;
	          res.text.should.match(/FailTube/);
	          request
	            .get('/0')
	            .end(function(err, res){
	                res.should.have.status(200);
	                res.should.be.html;
	                res.text.should.match(/a video of a woman being smacked in the face with a fish/);
	                done();
	            });
	        });
	});

	it('should delete a SINGLE video on /<id> DELETE', function(done){
		var request = chai.request(app);
		request.delete('/0')
			.end(function(err, res){
				if(err) return res.status(500).send(err);
				res.should.have.status(200);
				res.should.be.html;
				res.text.should.match(/epic seal fail/);
				request
					.get('/1')
					.end(function(err, res){
						res.should.have.status(200);
						res.should.be.html;
						res.text.should.match(/a cake falls over/);
						done();
					});
			})
	});



});




























