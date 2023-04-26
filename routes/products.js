var express = require('express');
const productServices =require ("../services/servicesProducts")
const router= express.Router();

router.get('/', function(req, res){
  const products=productServices.getAllProducts(req,res);
  res.json(products);
});

router.post('/', function(req, res){
  const body= req.body;
  //aquí esto enviando los datos que quiero incluir en el body de la petición
  //iría realmente una llamada a la base de datos para incluir el nuevo dato
  //simulamos que la base de datos nos da el ok
  res.json ({
    ok: true,
    data: body
  })
})

router.patch('/:id', function(req, res){
  const {id}= req.params;
  const body= req.body;

  res.json ({
    ok: true,
    message: "PATCH",
    data: body,
    id
  })
})
router.put('/:id', function(req, res){
  const {id}= req.params;
  const body= req.body;


  res.json ({
    ok: true,
    message: "PUT",
    data: body,
    id
  })
})
router.delete('/:id', function(req, res){
  const {id}= req.params;

  res.json ({
    ok: true,
    message: "deleted",
    id
  })
})

router.get('/:id/products', function(req, res){
  const {id}=req.params;
  res.json({
    'id': id,
    'name:':'Tecapplado',
    'price': 2800,
    'category': 'tecnology'
  });
});
router.get('/:id', function(req, res){
  const {id}=req.params;
  res.json({
    'id': id,
    'name:':'Teclado',
    'price': 2800,
    'category': 'tecnology'
  });
});

module.exports = router;
