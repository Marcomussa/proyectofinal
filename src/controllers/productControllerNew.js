const {
  Products
} = require("../database/models");

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
            category_id: req.body.categoria,
            image: req.file.filename,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        const createdProduct = await Products.create(newProduct)  
        res.redirect('/products/'+ createdProduct.id) 
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
            product.updatedAt = new Date() 
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
        res.render('productCart') 
    },
    admin: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('admin', { products: pList })
    }    
}