const  { Products, Category }  = require("../database/models");

const productController = {
    create: function(req, res){
        res.render('products/createProduct')
    },
    createProduct: async function (req, res, next) {
        let newProduct = {
            name: req.body.nombreProducto,
            description: req.body.descripcionProducto,
            price: req.body.precioProducto,
            discount: req.body.discount,
            category_id: req.body.categoria || 1,
            image: req.file ? req.file.filename : 'default.jpeg'
        }
        const createdProduct = await Products.create(newProduct)  
        
        res.redirect('/products/'+ createdProduct.null) 
    },
    list: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('products/productList', { products: pList })
    },
    productDetail: async function (req, res, next){
        let product = await Products.findOne({ where: { id: req.params.id } })
       
        if (!product) res.status(418).send('Producto No Definido')
        else res.render('products/productDetail', { productDetail: product })
    }, 
    mod: async function (req, res, next){
        let product = await Products.findOne({ where: { id: req.params.id } })
       
        if (!product) res.status(418).send('Producto No Definido')
        else res.render('products/modProduct', { product })
    }, 
    update: async function (req, res, next){
        let product = await Products.findOne({where: {id: req.params.id}})
        
        if (!product) res.status(418).send('El Producto No Existe')
        else {
            product.name = req.body.name || product.name;
            product.description = req.body.description || product.description ;
            product.price = req.body.price || product.price ;
            product.discount = req.body.discount || product.discount;
            product.category_id = req.body.category || product.category_id;
            product.image = req.file == undefined ? product.image : req.file.filename;
            await product.save()

            res.redirect('/products/admin/')
        } 
    },
    delete: async function (req, res, next){
        let product = await Products.findOne({where: {id: req.params.id}})

         if (!product) res.status(418).send('El Producto No Existe')
         else {
            await product.destroy()
            res.redirect('/products/admin/')
         }
        
    },
    redirect: function(req, res){
        res.render('redirect')
    },
    cart: function(req, res){
        res.render('products/productCart') 
    },
    admin: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('products/admin', { products: pList })
    }
}
module.exports = productController