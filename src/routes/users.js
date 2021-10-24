const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get('/', usersController.login)

router.get('/wishlist', usersController.wishlist)

module.exports = router