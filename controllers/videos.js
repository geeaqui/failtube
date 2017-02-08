function indexVideos(req, res){
	res.render('videos/index');
}

function showVideos(req, res){
	res.render('videos/show');
}

function editVideos(req, res){
	res.render('videos/edit');
}

function newVideos(req, res){
	res.render('videos/new');
}

function updateVideos(req,res){
	res.send('update');
}

function createVideos(req, res){
	res.send('create');
}

function deleteVideos(req, res){
	res.send('delete');
}

module.exports = {
	index:indexVideos,
 	show: showVideos,
 	edit: editVideos,
	new: newVideos,
	delete: deleteVideos,
	update: updateVideos,
	create: createVideos
}