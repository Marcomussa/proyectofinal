const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../../db/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))


let mainController = {
    index: function(req, res){
        let productList = {
        id: [],
        name: [],
        description: [],
        price: [],
        discount: [],
        category: [],
        image: [],
        products: products
    }
    products.forEach(par => {
        productList.id.push(par.id)
        productList.name.push(par.name)
        productList.description.push(par.description)
        productList.price.push(par.price)
        productList.discount.push(par.discount)
        productList.category.push(par.category)
        productList.image.push(par.image)
    })
     res.render('index',{ "productList": productList, "products": products})
    }
}

module.exports = mainController