var express = require('express');
const apiRouter = require('./server');
//const cors=require('cors')
const { errorLogs, handlerError } = require('./middleware/error.handler');
var app = express();

//app.use(cors());
app.use(express.json());
apiRouter(app);
app.use(handlerError); //lo ponemos en este orden porque queremos que se ejecute en este orden
app.use(errorLogs);


app.get('/', (req, res)=>{
  res.send('Hola mundo');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  console.log("hola tú");

});
