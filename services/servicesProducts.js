const faker= require('faker');

const getAllProducts = function(req, res){
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
  return products;
}
const createNewProduct= function (req, res){
  const body= req.body;
  //aquí esto enviando los datos que quiero incluir en el body de la petición
  //iría realmente una llamada a la base de datos para incluir el nuevo dato
  //simulamos que la base de datos nos da el ok
  res.json ({
    ok: true,
    data: body
  })
}
const updateProduct = function (req,res){
  const {id}= req.params;
  const body= req.body;

  res.json ({
    ok: true,
    message: "PATCH",
    data: body,
    id
  })

}

const deleteProduct=function (req,res){
  const {id}= req.params;

  res.json ({
    ok: true,
    message: "deleted",
    id
  })
}

const getOneProduct= function(req, res){
  const {id}=req.params;
  res.json({
    'id': id,
    'name:':'Teclado',
    'price': 2800,
    'category': 'tecnology'
  });
}

module.exports={getAllProducts,
                createNewProduct,
                updateProduct,
                deleteProduct,
                getOneProduct}
