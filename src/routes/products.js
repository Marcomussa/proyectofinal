const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

const multer = require('multer')
const path = require('path')

// Configuracion Multer:
let multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb){
        let folder = path.join(__dirname,'../../public/img/products')
        cb(null, folder)
    },
    filename: function(req, file, cb){
        //console.log(file)
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    }
})
let fileUpload = multer({'storage': multerDiskStorage})

// Rutas:
router.get('/', productController.list)

router.get('/cart', productController.cart)

router.get('/create', productController.create)

router.get('/post', fileUpload.single('imagenProducto'), productController.create)

router.get('/mod', productController.mod)

router.post('/redirect', productController.redirect)

router.get('/:id', productController.productDetail)

router.post('/create', fileUpload.single('imagenProducto'), productController.createProduct)

module.exports = router