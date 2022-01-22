const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.index)

router.get('/payment', mainController.payment)

router.get('/apiProducts', mainController.apiProducts)

router.get('/apiUsers', mainController.apiUsers)

module.exports = router