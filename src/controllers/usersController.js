const {Users} = require("../database/models");
const bcryptjs = require("bcryptjs");
const { check, validationResult, body } = require("express-validator");


const usersController = {
    login:function (req, res){
        res.render('login')
    },

    register: function(req, res){
        res.render('register')
    },

    validacionLogIn: async function (req, res){
      
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
            let newUser = {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.pass, 10),
                gender: req.body.gender || "",
                avatar: req.file.filename || 'null'
                
            }
            
            console.log(newUser)

            req.session.newUserSession = newUser

            res.cookie('newUserCookie', newUser)
      
            const createdUser = await Users.create(newUser)

            res.redirect('/users/login')
        }

    },

    processLogIn:  async function (req, res){
     let errors = validationResult(req)
        const validaciones = errors.array()

        if(!errors.isEmpty()){
            res.render('login', {
                data: req.body,
                validacionesLogIn: validaciones
            })
            console.log(errors.array())
        } else {
        let userToLogin = await Users.findOne({where: {email: req.body.emailLogIn}})

        if(userToLogin){
            let isPassOk = bcryptjs.compareSync(req.body.passLogIn, userToLogin.password)

            if(isPassOk){
                delete userToLogin.password
                req.session.userLogged = userToLogin

                if(req.body.recordarUser || true )  {
                    res.cookie('userEmail', req.body.emailLogIn, {
                        maxAge: (1000 * 60) * 60 * 24
                    })
                } 

                res.render('userProfile', {
                    userLogged: userToLogin
                })
                return 
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

       // console.log(userToLogin)
        }
       
    },

    wishlist:  function (req, res){
    res.render('wishlist')

    },

    profile: function (req, res){
      res.render('userProfile' );

    },
    logout: function(req, res){
        res.render("login")
    }

}
module.exports = usersController