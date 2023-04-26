var express = require('express');
const productServices =require ("../services/servicesProducts")
const router= express.Router();

router.get('/', function(req, res){
  const products=productServices.getAllProducts(req,res);
  res.json(products);
});

router.post('/', function(req, res){
  productServices.createNewProduct(req,res);
})

router.patch('/:id', function(req, res){
  productServices.updateProduct(req,res);

})
router.delete('/:id', function(req, res){
 productServices.deleteProduct(req,res);
})

router.get('/:id', function(req, res){
  productServices.getOneProduct(req,res);
});

module.exports = router;
