const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const {check} = require('express-validator')

router.get('/', usersController.login)

router.post('/', [
    check('name').isEmpty(),
    check('surname').isEmpty(),
    check('email').isEmpty().isEmail(),
    check('pass').isEmpty()
], usersController.login)

router.get('/redirect', function(req, res){
    res.send(req.body)
})

router.get('/wishlist', usersController.wishlist)

module.exports = router