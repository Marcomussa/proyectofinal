const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../../db/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

let productController = {
    cart: function(req, res){
        res.render('productCart') 
    },
    productDetail: function(req, res){
        let productDetail = []
        function matchID(){
            for(let i = 0; i < products.length; i++){
                if(products[i].id == req.params.id){
                    productDetail.push(products[i])
                }
            }
        }
        if (req.params.id > products.length || req.params.id === 0){ 
           res.status(404).send('Producto No Definido')
        } else {
            matchID()
            res.render('productDetail', {
                'productDetail': productDetail,
                'params': req.params.id
            })
        }
    },
    create: function(req, res){
        res.render('createProduct')
    },
    mod: function(req, res){
         if (products.length>req.params.id){
            const pActual = products.filter(p => p.id == req.params.id)
            res.render('modProduct', { 'product': pActual[0] })
         } else res.status(404).send('Producto No Definido')
        
        
    },
    update: function(req, res, next) 
    {products.forEach(product => {
        if (product.id == req.params.id) {
            product.name = req.body.name;
            product.description = req.body.description;
            product.price = req.body.price;
            product.discount = req.body.discount;
            product.category = req.body.category;
            product.image = req.file == undefined ? product.image : req.file.filename;
        }
    })

    let jsonDeProductos = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, jsonDeProductos);
    res.redirect('/products/admin/')
    
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
    },
    redirect: function(req, res){
        res.render('redirect')
    },
    createProduct: function(req, res){
        let newProduct = {
            id: products[products.length - 1].id + 1,
            name:req.body.nombreProducto,
            description:req.body.descripcionProducto,
            price: req.body.precioProducto,
            discount: req.body.discount,
            category: req.body.categoria,
            image: req.file.filename
            }
        products.push(newProduct)
        const productsJson = JSON.stringify(products, null, 4)
        fs.writeFileSync(productsFilePath, productsJson)
        res.redirect('/products/admin/')
    },
    delete: function (req, res) {
        let productosRestantes = products.filter(product => {
            return product.id != req.params.id;
        })
    
        let jsonDeProductos = JSON.stringify(productosRestantes, null, 4);
        fs.writeFileSync(productsFilePath, jsonDeProductos);
    
        res.redirect('/products/admin/'); 
    },
        admin : function(req, res){
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
            res.render('admin', {'productsList': productList}) 
        }
}

module.exports = productController