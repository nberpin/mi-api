

const getUsers =function(req,res){

  const {limit, offset}=req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    })
  }else {
    res.send('No hay parámetros');
  }
}
module.exports={getUsers}
