
const  { Products }  = require("../database/models");

let mainController = {
    index: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('index', { productList: pList })
    },
    payment: function(req, res){
        res.render('paymentMethods')
    },
}

module.exports = mainController