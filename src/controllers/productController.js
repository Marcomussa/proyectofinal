const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../../db/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productController = {
    cart: function(req, res){
        res.render('productCart') 
    },
    product: function(req, res){
        let productDetail = []
        function matchID(){
            for(let i = 0; i < products.length; i++){
                if(products[i].id == req.params.id){
                    productDetail.push(products[i])
                }
            }
        }
        matchID()
        res.render('productDetail', {
            'productDetail': productDetail,
            'params': req.params.id
        })
    },
    create: function(req, res){
        res.render('createProduct')
    },
    mod: function(req, res){
        res.render('modProduct')
    },
    list: function(req, res){
        let productList = {
            id: [],
            name: [],
            description: [],
            price: [],
            discount: [],
            category: [],
            products: products
        }
        products.forEach(par => {
            productList.id.push(par.id)
            productList.name.push(par.name)
            productList.description.push(par.description)
            productList.price.push(par.price)
            productList.discount.push(par.discount)
            productList.category.push(par.category)
        })
        res.render('productList', {'productsList': productList})
    }
}

module.exports = productController