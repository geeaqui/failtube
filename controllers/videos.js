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

	res.status(200).render("videos/new", { video: newVideo });
}

function updateVideos(req,res){
	var video = req.body;
	video.id = req.params.id;
	videos[req.params.id] = video;
	res.status(200).redirect('/');
}

function createVideos(req, res){
	var video= req.body;
	video.id = videos.length;
	videos.push = video;
	res.status(200).redirect('/');
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