const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/products', productController.product)

router.get('/cart', productController.cart)

router.get('/create', productController.create)

module.exports = router