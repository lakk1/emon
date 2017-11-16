const express = require('express');

const router = express.Router();
const validation = require('express-validation');

const noteController = require('./notes.controller');
const { createNote } = require('./notes.validation');

router.get('/posts', noteController.allPosts).post('/posts/create', validation(createNote), noteController.createNote);

module.exports = router;
