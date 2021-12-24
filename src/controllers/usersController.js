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

            let newUser = {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.pass, 10),
                gender: req.body.gender || "",
                avatar: req.file ? req.file.filename : 'null'
                
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
      res.render('userProfile' );
    },
    logout: function(req, res){
        req.session.userLogged = null
        res.clearCookie("user");
        res.redirect("login")
    },
    moduser: function(req, res){
        let user = Users.findOne({where: {email: req.cookies.test.email}})

        user
        .then((user) => {
            res.render('modUser', {user})            
        })
        .catch((err) => console.log(err))
    },
    update: async function (req, res, next){
        let user = await Users.findOne({where: {email: req.cookies.test.email}})
        
        if (!user) res.status(418).send('El usuario No Existe')
        else {
            user.name = req.body.name || user.name;
            user.surname = req.body.surname || user.surname ;
            user.avatar = req.file == undefined ? user.avatar : req.file.filename;
            await user.save()

            res.redirect('/users/profile')
        } 
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