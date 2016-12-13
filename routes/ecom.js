var express = require('express');
var router = express.Router();
var controllerEcom = require('../controllers/ecom');

router.get('/',function(req,res,next){
	res.send('inside ecommerce js');
});


module.exports = router;