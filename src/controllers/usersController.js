const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const User = require('./logInRegisterController')
const json_users = fs.readFileSync(path.join(__dirname, '../db/users.json'), 'utf-8')
let users = JSON.parse(json_users)

const usersController = {
    login: function(req, res){
        res.render('login')
    },
    register: function(req, res){
        res.render('register')
    },
    validacionLogIn: function(req, res){

        let errors = validationResult(req)
        const validaciones = errors.array()

        if(!errors.isEmpty()){
            res.render('register', {
                data: req.body,
                validaciones: validaciones
            })
            console.log(errors.array())
        } 
        else {
            let newUser = [{
                id: uuid.v4(),
                name: req.body.name,
                surname: req.body.surname,
                mail: req.body.email,
                password: bcryptjs.hashSync(req.body.pass, 10),
                gender: req.body.gender,
                avatar: req.file || 'null'
            }]
            
            console.log(newUser)

            req.session.newUserSession = newUser

            res.cookie('newUserCookie', newUser)

            users.unshift(...newUser)
      
            const JSONUsers = JSON.stringify(users)
            fs.writeFileSync(path.join(__dirname, '../db/users.json'), JSONUsers, 'utf-8')

            res.redirect('/users/login')
        }
    },
    processLogIn: function(req, res){
        let errors = validationResult(req)
        const validaciones = errors.array()

        if(!errors.isEmpty()){
            res.render('login', {
                data: req.body,
                validacionesLogIn: validaciones
            })
            console.log(errors.array())
        } else {
        let userToLogin = User.findByField('mail', req.body.emailLogIn)

        if(userToLogin){
            let isPassOk = bcryptjs.compareSync(req.body.passLogIn, userToLogin.password)

            if(isPassOk){
                delete userToLogin.password
                req.session.userLogged = userToLogin

                if(req.body.recordarUser) {
                    res.cookie('userEmail', req.body.email, {
                        maxAge: (1000 * 60) * 2
                    })
                } 

                res.render('userProfile', {
                    userLogged: userToLogin
                })
            } 
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son invalidas'
                    }
                }
            })
        }

        return res.render('login', {
            errors: {
                email: {
                    msg: 'Email no encontrado'
                }
            }
        })

        console.log(userToLogin)
        }

    },
    wishlist: function(req, res){
        res.render('wishlist')
    },
    profile: function(req, res){
		res.render('userProfile', );
    }
}

module.exports = usersController