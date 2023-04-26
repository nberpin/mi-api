var express = require('express');
const userServices=require('../services/servicesUsers')
const router= express.Router();


router.get ('/', function(req, res){
  userServices.getUsers(req,res);

})
module.exports = router;
