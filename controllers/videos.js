var videos = require('../models/video');

function indexVideos(req, res){
	res.status(200).render('videos/index', { videos : videos });
}

function showVideos(req, res){
	res.status(200).render('videos/show',{video: videos[req.params.id]});
}

function editVideos(req, res){
	res.status(200).render('videos/edit', {video:videos[req.params.id]});
}

function newVideos(req, res){
	var newVideo =  {
    id: "",
    title: "",
    description: "",
    url: "",
    failLevel: "",
    nsfw: ""
  }

	res.render("videos/new", {
		video: newVideo 
	});
}

function updateVideos(req,res){
	var video = videos[req.params.id];

	video.title = req.body.title;
	video.description = req.body.description;
	video.url = req.body.url;
	video.failLevel = req.body.failLevel;
	video.nsfw = req.body.nsfw;

	videos[req.params.id] = video;

	res.redirect('/');
}

function createVideos(req, res){
	var video = {
		id: videos.length,
		title: req.body.title,
		description: req.body.description,
		url: req.body.url,
		failLevel: req.body.failLevel,
		nsfw: req.body.nsfw
	}

	videos.push(video);

	res.redirect('/');
}

function deleteVideos(req, res){
	videos.splice(req.params.id, 1);
	for(var i=0; i<videos.length; i ++){
		videos[i].id = i;
	}
	res.status(200).redirect('/');
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