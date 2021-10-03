const express = require ('express')
const app = express()
const router = express.Router()
const productController = require('./src/controllers/productController')

/*Config public */
app.use(express.static('public'));

/*Routes*/
app.get('/', (req, res) => {
    res.sendFile(__dirname +'/src/views/index.html')
})

// app.get('/', productController.index)

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/src/views/login.html')
})

// app.get('/login', productController.login)

app.get('/cart', (req, res) => { 
    res.sendFile(__dirname +'/src/views/productCart.html')
})

// app.get('/cart', productController.cart)

app.get('/product', (req, res) => {
    res.sendFile(__dirname + '/src/views/productDetail.html')
})

// app.get('/product', productController.product)


app.get('/wishlist', (req, res) => {
     res.sendFile(__dirname + '/src/views/wishlist.html')
})

// app.get('/wishlist', productController.wishlist)

//!!! '*' indica una ruta default

// app.get('*', (req, res) => {
//     res.send('Ruta Por Default')
// })

app.get('*', productController.default)

/*Server*/
app.listen (3030, () => console.log('Server On port 3030') )
