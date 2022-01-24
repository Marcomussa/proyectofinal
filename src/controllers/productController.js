const  { Products, Category }  = require("../database/models");

const productController = {
    create: function(req, res){
        res.render('createProduct')
    },
    createProduct: async function (req, res, next) {
        let newProduct = {
            name: req.body.nombreProducto,
            description: req.body.descripcionProducto,
            price: req.body.precioProducto,
            discount: req.body.discount,
            category_id: req.body.categoria || 1,
            image: req.file ? req.file.filename : 'default.jpeg',
            apiProduct: `http://localhost:4000/apiUser/${req.body.nombreProducto}`
        }
        const createdProduct = await Products.create(newProduct)  
        
        res.redirect('/products/'+ createdProduct.null) 
    },
    list: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('productList', { products: pList })
    },
    productDetail: async function (req, res, next){
        let product = await Products.findOne({ where: { id: req.params.id } })
       
        if (!product) res.status(418).send('Producto No Definido')
        else res.render('productDetail', { productDetail: product })
    }, 
    mod: async function (req, res, next){
        let product = await Products.findOne({ where: { id: req.params.id } })
       
        if (!product) res.status(418).send('Producto No Definido')
        else res.render('modProduct', { product })
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

            res.redirect('/users/admin')
        } 
    },
    delete: async function (req, res, next){
        let product = await Products.findOne({where: {id: req.params.id}})

         if (!product) res.status(418).send('El Producto No Existe')
         else {
            await product.destroy()
            res.redirect('/users/admin')
         }
        
    },
    redirect: function(req, res){
        res.render('redirect')
    },
    cart: function(req, res){
        res.render('productCart') 
    },
    admin: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('admin', { products: pList })
    }
}
module.exports = productController