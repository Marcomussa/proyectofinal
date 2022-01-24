
const  { Products, Users, Categories }  = require("../database/models");

let mainController = {
    index: function (req, res, next){
        Products.findAll()
        .then((par) => {
            res.render('index', { productList: par}
        )})
        .catch(err => console.log(err))
    },
    payment: function(req, res){
        res.render('paymentMethods')
    },
    apiProducts: (req, res) => {
        Products.findAll()
        .then((par) => {
            res.json({
                count: par.length,
                products: par
            })
        })
        .catch(err => console.log(err))
    },
    apiProductsDetail: (req, res) => {
        Products.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((par) => {
            res.json(par)
        })
        .catch(err => console.log(err))
    },
    apiUsers: (req, res) => {
        Users.findAll()
        .then((par) => {
            res.json({
                count: par.length,
                users: par
            })
        })
        .catch(err => console.log(err))
    },
    apiUsersDetail: (req, res) => {
        Users.findOne({
            where: {
                id: req.params.email
            }
        })
        .then((par) => {
            const {id, name, surname, email, gender, avatar} = par
            res.json({
                id,
                name,
                surname,
                email,
                gender,
                avatar
            })
        })
        .catch(err => console.log(err))
    },
    apiCategories: (req, res) => {
        Categories.findAll()
        .then( (par) => {
            res.json({
                count: par.length,
                categories: par
            })           
        })
        .catch(err => console.log(err))
    },
    apiLastProduct: (req, res) => {
        Products.findAll({
            
        })
        .then( (par) => {
            res.json(par)           
        })
        .catch(err => console.log(err))
    }
}

module.exports = mainController