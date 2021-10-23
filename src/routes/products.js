const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/:id?', productController.product)

router.get('/cart', productController.cart)

router.get('/create', productController.create)

router.get('/mod', productController.mod)

router.get('/list', productController.list)

module.exports = router