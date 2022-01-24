const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const multer = require('multer')
const path = require('path')
const {check} = require('express-validator')

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

router.get('/admin', productController.admin)

router.get('/post', fileUpload.single('imagenProducto'), productController.create)

router.get('/mod/:id', productController.mod)

router.delete('/:id', productController.delete)

router.post('/redirect', productController.redirect)

router.put('/mod/:id', fileUpload.single('imagenProducto'), productController.update)

router.get('/:id', productController.productDetail)

router.post('/create', fileUpload.single('imagenProducto'), [
    check('nombreProducto').notEmpty().bail().withMessage('Ingrese un Nombre valido'),
    check('precioProducto').isNumeric({min: 1, max: 10000}).bail().withMessage('Ingrese un Precio del 1 al 10'),
    check('discount').optional({checkFalsy: true}).bail().isNumeric({min: 0, max: 99}).bail().withMessage('Ingrese un descuento valido'),
    check('descripcionProducto').notEmpty().bail().withMessage('Ingrese una Descripcion'),
    check('categoria').notEmpty().bail().withMessage('Ingrese una Categoria')
],productController.createProduct)

module.exports = router