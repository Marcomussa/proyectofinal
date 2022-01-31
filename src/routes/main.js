const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.index)

router.get('/payment', mainController.payment)

router.get('/return', mainController.return)

module.exports = router