var Videos = require('../models/video');

function indexVideos(req, res){
	// res.status(200).render('videos/index', { videos : videos });

	//get the model to load all the post for me
	Videos.find({},function(err, videos){
		//check for errors and return a 500 error if there is a problem
    	if(err) return res.status(500).send(err.message);

    	//data return so now we can render
	    res.render("videos/index" , {
	      videos: videos
	    });
	}); 
}

function showVideos(req, res){
	//res.status(200).render('videos/show',{video: videos[req.params.id]});
	Videos.findById(req.params.id, function(err, video){
		if(!video) return res.status(404).send('Not Found');
		if(err) return res.status(500).send(err);
		res.render('videos/show',{
			video:video
		});
	});
}

// EDIT - GET /:id/edit
function editVideos(req, res){
	//res.status(200).render('videos/edit', {video:videos[req.params.id]});
	Videos.findById(req.params.id, function(err, video){
		if(err) return res.status(500).send(err);
		res.render('videos/edit',{
			video: video
		});
	});
}

function newVideos(req, res){
	var newVideo =  {
    id: "",
    title: "",
    description: "",
    url: "",
    failLevel: "",
    nsfw: "",
    thumbnail:""
  }

	res.render("videos/new", {
		video: newVideo 
	});
}

function updateVideos(req,res){
	// var video = videos[req.params.id];

	// video.title = req.body.title;
	// video.description = req.body.description;
	// video.url = req.body.url;
	// video.failLevel = req.body.failLevel;
	// video.nsfw = req.body.nsfw;

	// videos[req.params.id] = video;

	// res.redirect('/');

	Videos.findByIdAndUpdate(req.params.id, req.body, function(err, post){
    // redirect the user to a GET route. We'll go back to the INDEX.
    res.redirect("/");
  });
}

function createVideos(req, res){
	// var video = {
	// 	id: videos.length,
	// 	title: req.body.title,
	// 	description: req.body.description,
	// 	url: req.body.url,
	// 	failLevel: req.body.failLevel,
	// 	nsfw: req.body.nsfw
	// }

	// videos.push(video);

	// res.redirect('/');

	// create a new post object with that data
  
  var video = new Videos(req.body);
  video.save(function(err, post){

    //handle the error
    if(err) return re.status(500).send(err.message);
    // redirect the user to a GET route. We'll go back to the INDEX.
    res.redirect("/");

  });
}

function deleteVideos(req, res){
	// Videos.pull(req.params.id, 1);
	// for(var i=0; i<Videos.length; i ++){
	// 	Videos[i].id = i;
	// }
	// res.status(200).redirect('/');

	Videos.findByIdAndRemove(req.params.id, function(err, post){
    // redirect the user to a GET route. We'll go back to the INDEX.
    res.redirect("/");
  });
}

module.exports = {
	index: indexVideos,
	show: showVideos,
	new: newVideos,
	create: createVideos,
	edit: editVideos,
	update: updateVideos,
	delete: deleteVideos
}