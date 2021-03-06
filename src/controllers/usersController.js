const {Users} = require("../database/models");
const bcryptjs = require("bcryptjs");
const { check, validationResult, body } = require("express-validator");
const loginRegisterController = require('./logInRegisterController')

const usersController = {
    login:function (req, res){
        res.render('login')
    },

    register: function(req, res){
        res.render('register')
    },

    processRegister: async function (req, res){      
        let errors = validationResult(req)
        const validaciones = errors.array()

        if(!errors.isEmpty()){
            res.render('register', {
                data: req.body,
                validaciones
            })
            console.log(errors.array())
        } 
        else {
            let userInDb = loginRegisterController.findByField('mail', req.body.email)

            console.log(userInDb)

            if (userInDb) {
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya esta registrado'
                        }
                    }
                })
            }

            let id = Math.floor(Math.random() * 4294967295)
            let newUser = {
                id: id,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.pass, 10),
                gender: req.body.gender ? req.body.gender : 'No especifica',
                avatar: req.file ? req.file.filename : 'null',
                apiUser: `http://localhost:4000/api/users/${id}`
            }
            
            console.log(newUser)

            req.session.newUserSession = newUser

            res.cookie('newUserCookie', newUser)
      
            await Users.create(newUser)

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

                let userCookie = {
                    id: req.session.userLogged.id,
                    email: req.session.userLogged.email,
                    name: req.session.userLogged.name,
                    surname: req.session.userLogged.surname,
                    gender: req.session.userLogged.gender || "",
                    avatar: req.file ? req.file.filename : 'null'
                }

                res.cookie('test', userCookie)

                if(req.body.recordarUser)  {
                    res.cookie('user', userCookie, {
                        maxAge: (1000 * 60) * 60 * 24
                    })
                    // Acceder a la cookie: console.log(req.cookies.user) 
                } 

                res.redirect('/users/profile')
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
        console.log(req.session.userLogged)
        res.render('userProfile');
    },
    logout: function(req, res){
        req.session.userLogged = null
        res.clearCookie("user")
        res.clearCookie("test")
        res.redirect("/users/login")
    },
    findUserUpdate: function(req, res){
        Users.findOne({where: {email: req.session.userLogged.email}})
        .then((user) => {
            res.render('modUserv2', {user})            
        })
        .catch((err) => console.log(err))
    },
    update: function (req, res, next){
        // Users.findOne({where: {email: req.session.userLogged.email}})
        // .then((user) => {
        //     const {name, surname} = req.body
        //     Users.update({
        //         name: name,
        //         surname: surname
        //     }, {
        //         where: {
        //             email: req.session.userLogged.email
        //         }
        //     })
        //     req.session.userLogged = {
        //         email: req.session.userLogged.email,
        //         name: name,
        //         surname: surname
        //     }
        //     res.redirect('/users/profile')
        // })
        // .catch((err) => console.log(err))
        const {name, surname} = req.body
        Users.update({
            name: name ? name : req.session.userLogged.name, 
            surname: surname ? surname : req.session.userLogged.surname,
            }, {
            where: {
                email: req.session.userLogged.email
            }
        })
       
        req.session.userLogged = {
            ...req.session.userLogged,
            name,
            surname,
            avatar: req.file ? req.file.filename : req.session.userLogged.avatar
        }

        res.redirect('/users/profile')
    },     
    delete: async function (req, res, next){
        let user = await Users.findOne({where: {id: req.session.userLogged.id}})

         if (!user) res.status(418).send('El Usuario No Existe')
         else {
            await user.destroy()
            res.redirect('/')
         }
    }
}
module.exports = usersController