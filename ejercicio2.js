const Express = require('express');


const ejercicio = Express();
const port = 3002;

ejercicio.get('/cliente', (req, res)=>{
      res.send("Ruta express, reto introduccion");
});

ejercicio.get('/', (req, res)=>{
      res.send("Servidor");
});
ejercicio.listen(port, ()=>{
      console.log(`servidor inicializado en el puerto ${port}`);
})