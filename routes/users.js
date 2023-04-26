var express = require('express');
const router= express.Router();

router.get ('/', function(req, res){
  console.log (req.query);
  const {limit, offset}=req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    })
  }else {
    res.send('No hay parámetros');
  }
})
module.exports = router;
