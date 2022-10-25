const express = require('express');
const router = express.Router();


router.get('/contacto', (req, res)=>{
    res.render('contact');    
});

router.get('/perfil', (req, res)=>{
    res.render('index', {nombre: "David Orlando Forero Moreno"});    
});

module.exports = router;