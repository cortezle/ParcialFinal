var express = require('express');
var router= express.Router();
var CarController = require('../controllers/CarController');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Administrador de Comites' });
  });

router.post('/',CarController.store);
  
  module.exports = router;
  