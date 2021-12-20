
const  { Products }  = require("../database/models");

let mainController = {
    index: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('index', { productList: pList })
    }
}

module.exports = mainController