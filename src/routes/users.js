const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const {check} = require('express-validator')

router.get('/', usersController.login)

router.get('/redirect', usersController.validacionLogIn)

router.post('/redirect', [
    check('name').notEmpty(),
    check('surname').notEmpty(),
    check('email').notEmpty().isEmail(),
    check('pass').notEmpty()
], usersController.validacionLogIn)

router.get('/wishlist', usersController.wishlist)

module.exports = router