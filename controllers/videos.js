function indexVideos(req, res){
	res.send('index');
}

function showVideos(req, res){
	res.send('show');
}

function editVideos(req, res){
	res.send('edit');
}

function newVideos(req, res){
	res.send('new');
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