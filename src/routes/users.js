const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const multer = require('multer')
const path = require('path')

router.get('/', usersController.login)
router.post('/', usersController.login)

router.get('/wishlist', usersController.wishlist)

let multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb){
        let folder = path.join(__dirname,'/img')
        cb(null, folder)
    },
    filename: function(req, file, cb){
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    }
})

module.exports = router