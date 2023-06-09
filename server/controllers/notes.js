const notesRouter = require('express').Router()
const Note = require('../models/note')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

notesRouter.get('/', async (request, response) => {
  const notes = await Note
    .find({}).populate('user', { username: 1, name: 1 })

  response.json(notes)
});

notesRouter.get('/:id', (request, response, next) => {
    const body = request.body

    const note = {
      content: body.content
    }
    
    Note.findOne(note).then(result => {
        if (note) {
          response.json(note)
        } else {
          response.status(404).end()
        }
      })
})



notesRouter.post('/', async (request, response) => {
  const body = request.body;
  const token = getTokenFrom(request)
  console.log(token)
  const decodedToken = jwt.verify(token, 'admin')
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  console.log(user)
  const note = new Note({
    title:body.title,
    content: body.content,
    colors:body.colors,
    searched:body.searched || false,
    file:body.file || " ",
    pin:body.pin || false,
    date: new Date(),
    user: user._id
  })


  const savedNote = await note.save()
  user.notes = user.notes.concat(savedNote._id)
  await user.save()
  
  response.status(201).json(savedNote)
})

notesRouter.delete('/:id', (request, response, next) => {
    const body = request.body

    const note = {
      content: body.content
    }
    Note.deleteOne(note).then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
})

notesRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const note = {
      content: body.content,
      pin: body.pin
    }
  
    Note.findByIdAndUpdate(request.params.id, note, { new: true })
      .then(updatedNote => {
        response.json(updatedNote)
      })
      .catch(error => next(error))
  })

module.exports = notesRouter