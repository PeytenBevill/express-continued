const express = require("express");
const vehiclesControllers = require('../controllers/vehicles')

const router = express.Router()


//Get all
router.get('/vehicles', vehiclesControllers.list)


//Get one
router.get('/vehicle/:id', vehiclesControllers.show)


//Create one
router.post('/vehicles', vehiclesControllers.create)

module.exports = router;