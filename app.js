const express = require('express')
const app = express()
const productController = require('./src/controllers/productController')
const ejs = require('ejs')
const path = require('path')
const router = express.Router()

/*Config public */
app.use(express.static('public'));
app.use(express.static('src'))
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

/*Routes*/
app.get('/', productController.index)

app.get('/login', productController.login)

app.get('/cart', productController.cart)

app.get('/product', productController.product)

app.get('/wishlist', productController.wishlist)

/*Server*/
app.listen (3030, () => console.log('Server On \nhttp://localhost:3030') )
