const {validationResult} = require('express-validator')

const usersController = {
    login: function(req, res){
        res.render('login')
    },
    validacionLogIn: function(req, res){
        let errors = validationResult(req)
        const validaciones = errors.array()
        if(!errors.isEmpty()){
            res.render('login', {
                data: req.body,
                validaciones: validaciones
            })
            console.log(errors.array())
        } 
        else {
        res.send(req.body)
        }
    },
    wishlist: function(req, res){
        res.render('wishlist')
    },
    profile: function(req, res){
		return res.render('userProfile', );
    }
}

module.exports = usersController