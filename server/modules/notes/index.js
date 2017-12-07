const express = require('express');

const router = express.Router();
const validation = require('express-validation');

const noteController = require('./notes.controller');
const { createNote } = require('./notes.validation');

router
  .get('/notes', noteController.allNotes)
  .post('/notes', validation(createNote), noteController.createNote)
  .delete('/notes/:id', noteController.deleteNote);

module.exports = router;
