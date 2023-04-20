var express = require('express');
var app = express();
const faker= require('faker');



app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

app.get('/products', function(req, res){
  const products=[];
  const {size}=req.query;
  const limit=size ||5;
  for (let index=0; index<limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
});

app.get ('/users', function(req, res){
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

app.get('/products/:id/products', function(req, res){
  const {id}=req.params;
  res.json({
    'id': id,
    'name:':'Teclado',
    'price': 2800,
    'category': 'tecnology'
  });
});
app.get('/products/:id', function(req, res){
  const {id}=req.params;
  res.json({
    'id': id,
    'name:':'Teclado',
    'price': 2800,
    'category': 'tecnology'
  });
});
app.get('/secreto', function(req, res) {
  res.send('Entrando en la sección secreta!');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  console.log("hola tú");

});
