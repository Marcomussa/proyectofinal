const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const {check} = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
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

router.get('/', (req, res) => res.send('Vista user en proceso'))

router.get('/login', guestMiddleware, usersController.login)

router.get('/register', guestMiddleware ,usersController.register)

router.post('/register', upload.single('imagenUsuario')
, [
    check('name').notEmpty().withMessage('Ingrese un Nombre'),
    check('surname').notEmpty().withMessage('Ingrese un Apellido'),
    check('email').notEmpty().withMessage('Ingrese un Email'),
    check('pass').notEmpty().withMessage('Ingrese una Password')], 
usersController.processRegister)

router.get('/wishlist', usersController.wishlist)

router.get('/profile/', authMiddleware,  usersController.profile);

router.post('/profile', usersController.processLogIn)

router.get('/logout', usersController.logout)

router.post('/update', usersController.update)

router.get('/update', authMiddleware, usersController.findUserUpdate)

// router.put('/moduser', upload.single('avatar'), usersController.update)

module.exports = router