const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.list)

router.get('/cart', productController.cart)

router.get('/create', productController.create)
    
router.get('/mod', productController.mod)

router.get('/:id', productController.productDetail)

module.exports = router
