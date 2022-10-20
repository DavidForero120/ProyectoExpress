const Express = require('express');


const ejercicio = Express();
const port = 3002;

ejercicio.use(Express.static(__dirname + '/public'));

ejercicio.set('view engine', 'ejs');

ejercicio.set('views', __dirname + '/views');


ejercicio.get('/perfil', (req, res)=>{
      res.render('index', {nombre: "David Orlando Forero Moreno"});    
});


ejercicio.get('/user', (req, res)=>{
      res.send("route user");
});

ejercicio.listen(port, ()=>{
      console.log(`servidor inicializado en el puerto ${port}`);
      
});


ejercicio.use((req , res, next)=>{
      res.status(404).sendFile(__dirname + '/public/404.html')
})


