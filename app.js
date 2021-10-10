const express = require('express')
const app = express()
const productController = require('./src/controllers/productController')
const ejs = require('ejs')
const path = require('path')
const mainRoutes = require('./src/routes/main')

// Accediendo a recursos estaticos: 
app.use(express.static('public'));
app.use(express.static('src'))

// Configurar EJS: 
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

// Rutas:
app.get('/', mainRoutes)

app.get('/login', mainRoutes)

app.get('/cart', mainRoutes)

app.get('/product', mainRoutes)

app.get('/create', mainRoutes)

app.get('/wishlist', mainRoutes)

// Server:
app.listen (3030, () => console.log('Server On http://localhost:3030') )
