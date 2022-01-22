
const  { Products, Users }  = require("../database/models");

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
}

module.exports = mainController