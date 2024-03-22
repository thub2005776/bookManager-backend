const express = require('express');
const users = require('../controllers/user.controller');

const router = express.Router();

router.route('/')
    .get(users.findAll)
    .post(users.create)

router.route(':id')
    .post(users.update)
    .delete(users.delete)

router.route('/favorite/:id')
    .post(users.addFavorite)
    
module.exports = router;