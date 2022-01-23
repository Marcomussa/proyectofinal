const express = require('express')
const app = express()
const mainRoutes = require('./routes/main')
const productsRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')
const path = require('path')
const methodOverride = require('method-override') 
const session = require('express-session')
const cookieParser = require('cookie-parser')
const isLoggedMiddleware = require('./middlewares/userLoguedMiddleware')
const PORT = 4000

// Accediendo a recursos estaticos: 
app.use(express.static(path.resolve(__dirname, '../public')))
app.set('views', path.resolve(__dirname, 'views'))

app.use(express.static(path.resolve(__dirname, '../src')))
app.set('scripts', path.resolve(__dirname, 'scripts'))

// Captando el body del pedido:
app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

app.use(session({
    secret: 'Hola',
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser())

//delete
app.use(methodOverride("_method"))

app.use(isLoggedMiddleware)

// Configurar EJS: 
app.set('view engine', 'ejs')

// Rutas:
app.use('/', mainRoutes)

app.use('/users', usersRoutes)

app.use('/products', productsRoutes)

// Server:
app.listen (PORT, () => console.log('Server On http://localhost:4000') )
app.use((req, res, next) => {
    res.status(404).send('Not Found')
})
