const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const {check} = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', usersController.login)

router.get('/redirect', usersController.validacionLogIn)

router.post('/redirect', [
    check('name').notEmpty(),
    check('surname').notEmpty(),
    check('email').notEmpty().isEmail(),
    check('pass').notEmpty()
], usersController.validacionLogIn)

router.get('/wishlist', usersController.wishlist)

router.get('/profile/', /*authMiddleware, */ usersController.profile);

module.exports = router