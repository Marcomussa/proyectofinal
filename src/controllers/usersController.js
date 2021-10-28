const {validationResult} = require('express-validator')

const usersController = {
    login: function(req, res){
        let errors = validationResult(req)
        const validaciones = errors.array()
        console.log(validaciones)
        res.render('login', {
            validaciones: validaciones
        })
    },
    wishlist: function(req, res){
        res.render('wishlist')
    }
}

module.exports = usersController