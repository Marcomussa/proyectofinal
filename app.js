const express = require('express')
const app = express()
const mainRoutes = require('./src/routes/main')
const productsRoutes = require('./src/routes/products')
const usersRoutes = require('./src/routes/users')

// Accediendo a recursos estaticos: 
app.use(express.static('public'));
// app.use(express.static('src'))

// Configurar EJS: 
app.set('view engine', 'ejs')

// Rutas:
app.get('/', mainRoutes)

app.get('/products', productsRoutes)

app.get('/users', usersRoutes)

// Server:
app.listen (3030, () => console.log('Server On http://localhost:3030') )
