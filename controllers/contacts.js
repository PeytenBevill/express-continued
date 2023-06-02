const contacts = require('../data/contacts')

const  { v4: uuidv4 } = require('uuid');



//List
const list = (req, res) => {
  res.json(contacts)
}

//Show
const show = (req, res) => { 
  const {id} = req.params
  let found = contacts.find((contact) => {
    return contact._id === Number(id)
  })

  res.json(found)
}

//Create
const create = (req, res) => {
  const {body} = req

 const obj = {
    "_id": uuidv4(),
    ...body,
  }

 contacts.push(obj)

  res.json(obj)
}

module.exports = {
  list, 
  show,
  create
}