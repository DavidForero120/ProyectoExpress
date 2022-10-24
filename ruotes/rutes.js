const express = require('express');
const router = express.Router();

router.get('/perfil', (req, res)=>{
    res.render('index', {nombre: "David Orlando Forero Moreno"});    
});

module.exports = router;