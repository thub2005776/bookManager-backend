const express = require('express');
const books = require('../controllers/favorite.controller');

const router = express.Router();

router.route('/')
    .get(books.findAll)
    .post(books.create)

router.route('/:id')
    .get(books.findOne)
    .delete(books.delete)

router.route('/uid/:uid')
    .get(books.findManyByUid)
    .post(books.update)

router.route('/:bid')
    .get(books.findManyByBid)

module.exports = router;