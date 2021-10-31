const express = require('express')
const app = express()
const mainRoutes = require('./routes/main')
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')
const path = require('path')
const middlewares = require('./middlewares/middlewares')
const methodOverride = require('method-override') 

// Accediendo a recursos estaticos: 
app.use(express.static(path.resolve(__dirname, '../public')))
app.set('views', path.resolve(__dirname, 'views'))

// Captando el body del pedido:
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//delete
app.use(methodOverride("_method"))


// Configurar EJS: 
app.set('view engine', 'ejs')

// Rutas:
app.use('/', mainRoutes)

app.use('/users', usersRoutes)

app.use('/products', productsRoutes)

//Middlewares:
app.use(middlewares.seguimientoPaginas)

// Server:
app.listen (3000, () => console.log('Server On http://localhost:3000') )
app.use((req, res, next) => {
    res.status(404).send('Not Found')
})
