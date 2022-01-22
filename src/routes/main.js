const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.index)

router.get('/payment', mainController.payment)

router.get('/apiProducts', mainController.apiProducts)

router.get('/apiProducts/:id', mainController.apiProductsDetail)

router.get('/apiUsers', mainController.apiUsers)

router.get('/apiUsers/:id', mainController.apiUsersDetail)

router.get('/apiCategories', mainController.apiCategories)

module.exports = router