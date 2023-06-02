const comments = require('../data/comments')

const  { v4: uuidv4 } = require('uuid');


//List
const list = (req, res) => { 
  res.json(comments)
}

//Show - 1 item
const show = (req, res) => { 
  const {id} = req.params
  let found = comments.find((comment) => {
    return comment._id === Number(id)
  })
  res.json(found)
}

//Create
const create = (req, res) => {
  const {body} = req

 const comment = {
    "_id": uuidv4(),
    ...body,
    "postId": 1
  }

 comments.push(comment)

  res.json(comments)
}

module.exports = {
  list,
  show,
  create
}