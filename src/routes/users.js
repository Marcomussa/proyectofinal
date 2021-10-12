const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get('/wishlist', usersController.wishlist)

router.get('/login', usersController.login)


module.exports = router