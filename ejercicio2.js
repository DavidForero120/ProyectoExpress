const Express = require('express');


const ejercicio = Express();
const port = 3002;

ejercicio.use(Express.static(__dirname + '/public'));

ejercicio.set('view engine', 'ejs');

ejercicio.set('views', __dirname + '/views');

ejercicio.use('/vitae', require('./ruotes/rutes'));

ejercicio.use('/vitae', require('./ruotes/rutes'));

ejercicio.listen(port, ()=>{
      console.log(`servidor inicializado en el puerto ${port}`);  
});


ejercicio.use((req , res, next)=>{
      res.status(404).sendFile(__dirname + '/views/404.html');
})
