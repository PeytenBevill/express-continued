const express = require("express");
const contactsControllers = require('../controllers/contacts')

const router = express.Router()

//Get all
router.get('/contacts', contactsControllers.list)

//Get one
router.get('/contact/:id', contactsControllers.show)

//Create one
router.get('/contacts', contactsControllers.create)

module.exports = router;
