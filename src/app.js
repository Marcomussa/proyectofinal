const express = require('express')
const app = express()
const mainRoutes = require('./routes/main')
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')
const path = require('path')

// Accediendo a recursos estaticos: 
app.use(express.static(path.resolve(__dirname, '../public')));

app.set('views', path.resolve(__dirname, 'views'))
// app.use(express.static('src'))

// Configurar EJS: 
app.set('view engine', 'ejs')

// Rutas:
app.get('/', mainRoutes)

app.get('/wishlist', usersRoutes)

app.get('/login', usersRoutes)

app.get('/cart', productsRoutes)

app.get('/products', productsRoutes)

app.get('/cart', productsRoutes)

app.get('/create', productsRoutes)

// Server:
app.listen (3000, () => console.log('Server On http://localhost:3000') )
