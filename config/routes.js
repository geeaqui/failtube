var express = require('express');
var router = express.Router();
var videosController = require('./controller/videos');

router.get('/', function(req,res){
	res.send('index working');
});

router.route('/')
  .get(videosController.index)
  .post(videosController.create);

router.route('/:id')
  .get(videosController.show)
  .put(videosController.update)
  .delete(videosController.delete);

router.get('/new' , videosController.new);

router.get('/:id/edit' , videosController.edit);


module.exports = router;