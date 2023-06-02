const express = require("express");
const productsControllers = require('../controllers/products')

const router = express.Router()

//Get all
router.get('/products', productsControllers.list)

//Get one
router.get('/product/:id', productsControllers.show)

//Create one
router.get('/products', productsControllers.create)

module.exports = router;