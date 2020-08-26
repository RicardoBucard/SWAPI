const express = require('express');
const controller = require('../controllers/planetController');
const planetSchema = require('../validator/planetSchema');
const validator = require('express-joi-validation').createValidator({})

const router = express.Router();

router.post('/create/', validator.body(planetSchema) ,controller.createPlanet);

router.get('/list/', controller.listPlanets);

router.get('/find/:id', controller.findPlanetById);

router.get('/search/:searchQuery', controller.searchPlanet);

router.delete('/delete/:id', controller.deletePlanet);

module.exports = app => app.use('/planet', router);