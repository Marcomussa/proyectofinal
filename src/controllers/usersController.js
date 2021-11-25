const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const fs = require('fs')
const path = require('path')


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
         let newUser = {
                nombre: req.body.name,
                apellido: req.body.surname,
                email: req.body.email,
                pass: bcryptjs.hashSync(req.body.pass, 10),
                avatar: req.file
            }
   
        res.send(newUser)
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