const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.index)

router.get('/payment', mainController.payment)

router.get('/apiProducts', mainController.apiProducts)

router.get('/apiProducts/:id', mainController.apiProductsDetail)

router.get('/apiUsers', mainController.apiUsers)

router.get('/apiUsers/:email', mainController.apiUsersDetail)

router.get('/apiCategories', mainController.apiCategories)

router.get('/apiLastProducts', mainController.apiLastProducts)

router.get('/apiProdsInCategory', mainController.apiProdsInCategory)


module.exports = router