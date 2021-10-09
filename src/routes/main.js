const express = require ('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.index)

router.get('/login', productController.login)

router.get('/cart', productController.cart)

router.get('/product', productController.product)

router.get('/wishlist', productController.wishlist)

module.exports = router