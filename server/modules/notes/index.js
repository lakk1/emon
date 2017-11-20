const express = require('express');

const router = express.Router();
const validation = require('express-validation');

const noteController = require('./notes.controller');
const { createNote } = require('./notes.validation');

router.get('/notes', noteController.allPosts).post('/notes', validation(createNote), noteController.createNote);

module.exports = router;
