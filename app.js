const express = require ('express')
const app = express ()
const router = express.Router()
const productController = require('./controllers/productController')

/*Config public */
app.use(express.static('public'));

/*Routes*/
app.get('/', (req, res) => {
    res.sendFile(__dirname +'/views/index.html')
})

// router.get('/', productController.index)

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html')
})

// router.get('/login', productController.login)

app.get('/cart', (req, res) => { 
    res.sendFile(__dirname +'/views/productCart.html')
})

// router.get('/cart', productController.cart)

app.get('/product', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail.html')
})

// router.get('/product', productController.product)


app.get('/wishlist', (req, res) => {
     res.sendFile(__dirname + '/views/wishlist.html')
})

// router.get('/wishlist', productController.wishlist)

/*Server*/
app.listen (3030, () => console.log('Server On port 3030') )
