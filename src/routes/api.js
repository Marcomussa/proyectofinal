const express = require('express')
const router = express.Router()
const api = require('../controllers/apiController')

router.get('/products', api.Products)

router.get('/products/:id', api.ProductsDetail)

router.get('/users', api.Users)

router.get('/users/:id', api.UsersDetail)

router.get('/categories', api.Categories)

router.get('/lastProduct', api.LastProduct)

router.get('/prodsInCategory', api.ProdsInCategory)

router.get('/discounts', api.ProductDiscounts)

module.exports = router