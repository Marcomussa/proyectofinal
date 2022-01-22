
const  { Products, Users, Categories }  = require("../database/models");

let mainController = {
    index: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('index', { productList: pList })
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
                id: req.params.id
            }
        })
        .then((par) => {
            res.json(par)
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
    }
}

module.exports = mainController