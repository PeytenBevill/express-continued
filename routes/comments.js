const express = require("express");
const commentsControllers = require('../controllers/comments')

const router = express.Router()


//Get all
router.get('/comments', commentsControllers.list)


//Get one
router.get('/comment/:id', commentsControllers.show)


//Create one
router.post('/comments', commentsControllers.create)

module.exports = router;