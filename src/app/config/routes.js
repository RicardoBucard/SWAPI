const express = require('express');
const controller = require('../controllers/planetaController');
const planetaSchema = require('../validator/planetaSchema');
const validator = require('express-joi-validation').createValidator({})

const router = express.Router();

router.post('/create/', validator.body(planetaSchema) ,controller.criaPlaneta);

router.get('/list/', controller.listaPlanetas);

router.get('/find/:id', controller.encontraPlanetaPorId);

router.get('/search/:searchQuery', controller.procuraPlaneta);

router.delete('/delete/:id', controller.deletaPlaneta);

module.exports = app => app.use('/planeta', router);