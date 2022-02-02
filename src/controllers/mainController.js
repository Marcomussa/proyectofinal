
const  {Products}  = require("../database/models");

let mainController = {
    index: function (req, res, next){
        Products.findAll({
            limit: 4
        })
        .then((par) => {
            res.render('index', { productList: par}
        )})
        .catch(err => console.log(err))
    },
    payment: function(req, res){
        res.render('paymentMethods')
    },
    return: function(req, res){
        res.render('orderReturn')
    }
}

module.exports = mainController