const express = require ('express')
const app = express ()

/*Config public */
app.use(express.static('public'));


/*Routes*/

app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/views/index.html');})


app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');})


app.get('/cart', (req, res)=>{ 
    res.sendFile(__dirname +'/views/productCart.html');})


app.get('/product', (req, res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');})

app.get('/wishlist', (req, res)=>{
     res.sendFile(__dirname + '/views/wishlist.html');})


/*Server*/

app.listen (3000, () => console.log('Server On port 3000') )
