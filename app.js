// const express = require ('express')
// const path = require ('path')
// const app = express ()

// /*Config public */
// app.use(express.static(path.resolve(__dirname, 'public')))


// /*Routes*/

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,'views/index.html' ))})

// app.get('/login', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,'views/login.html' ))})

// app.get('/cart', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,'views/productCart.html' ))})

// app.get('/product', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,'views/productDetail.html' ))})

// app.get('/register', (req, res)=>{
//      res.sendFile(path.resolve(__dirname,'views/register.html' ))})


// /*Server*/

// app.listen (3000, () => console.log('Server On port 3000') )

const btnCrearCuenta = document.querySelector('#btnCrearCuenta')
const contenedorCrearCuenta = document.querySelector('#crearCuenta')
function mostrarCrearCuenta(){
    btnCrearCuenta.addEventListener('click', function(){
        contenedorCrearCuenta.style.display = 'block'
    })
}

mostrarCrearCuenta()