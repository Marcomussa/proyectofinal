const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.product)

router.get('/cart', productController.cart)

router.get('/create', productController.create)

router.get('/mod', productController.mod)

module.exports = router