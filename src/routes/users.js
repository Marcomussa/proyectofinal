const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const {check} = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')

const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        let folder = path.join(__dirname, '../../public/img/avatars')
        cb(null, folder)
    },
    filename: function(req, file, cb){
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    }
})
const upload = multer({ 
    storage: storage
})


router.get('/', usersController.login)

router.get('/redirect', usersController.validacionLogIn)

router.post('/redirect', upload.single('imagenUsuario')
, [
    check('name').notEmpty(),
    check('surname').notEmpty(),
    check('email').notEmpty().isEmail(),
    check('pass').notEmpty()
], usersController.validacionLogIn)

router.get('/wishlist', usersController.wishlist)

router.get('/profile/:id', /*authMiddleware, */ usersController.profile);

module.exports = router