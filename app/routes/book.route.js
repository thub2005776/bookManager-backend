const express = require('express');
const books = require('../controllers/book.controller');

const router = express.Router();

router.route('/')
    .get(books.findAll)
    .post(books.create)

router.route('/:id')
    .get(books.findOne)
    .post(books.update)
    .delete(books.delete)

router.route('/stored/:id')
    .post(books.updateStored)

module.exports = router;