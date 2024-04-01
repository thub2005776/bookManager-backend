const express = require('express');
const books = require('../controllers/borrowedBook.controller');

const router = express.Router();

router.route('/')
    .get(books.findAll)
    .post(books.create)

router.route('/:id')
    .get(books.findOne)
    .post(books.update)
    .delete(books.delete)

router.route('/:uid')
    .get(books.findManyByUid)

router.route('/:bid')
    .get(books.findManyByBid)

module.exports = router;