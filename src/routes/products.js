const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const multer = require('multer')
const path = require('path')

router.get('/', productController.list)

router.get('/cart', productController.cart)

router.get('/create', productController.create)
    
router.get('/mod', productController.mod)

router.post('/redirect', productController.redirect)

let multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb){
        let folder = path.join(__dirname,'../../public/img/groups')
        cb(null, folder)
    },
    filename: function(req, file, cb){
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    }
})

let fileUpload = multer({'storage': multerDiskStorage})

router.post('/', fileUpload.single('imagenUsuario'))
productController.redirect

router.get('/:id', productController.productDetail)

module.exports = router
