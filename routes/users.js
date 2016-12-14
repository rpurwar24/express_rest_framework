var express = require('express');
var router = express.Router();
var controllerUser = require('../controllers/user');

/* GET users listing. */


router.get('/', function(req, res) {
  controllerUser.get(null,res);
});

router.get('/:id', function(req, res) {
  controllerUser.get(req.params.id,res);
});

router.post('/',function(req,res){
	controllerUser.create(req.body,res);
});

router.put('/',function(req,res){
	controllerUser.update(req.body,res);
});

router.delete('/:id',function(req,res){
	controllerUser.delete(req.params.id,res);
});

module.exports = router;
