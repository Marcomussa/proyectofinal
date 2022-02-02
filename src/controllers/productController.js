const  { Products, Category }  = require("../database/models");
const { check, validationResult, body } = require("express-validator");

const productController = {
    create: function(req, res){
        res.render('createProduct')
    },
    createProduct: async function (req, res, next) {
        let errors = validationResult(req)
        const validaciones = errors.array()

        if(!errors.isEmpty()){
            res.render('createProduct', {
                old: req.body,
                validacionesCreateProduct: validaciones
            })
            console.log(errors.array())
        } 
        else { 
            let id = Math.floor(Math.random() * 4294967295)
            let date = new Date()
            console.log(date)
            let newProduct = {
                id: id,
                name: req.body.nombreProducto,
                description: req.body.descripcionProducto,
                price: req.body.precioProducto,
                discount: req.body.discount ? req.body.discount : 0,
                category_id: req.body.categoria,
                image: req.file ? req.file.filename : 'default.jpeg',
                image_url: req.file ? `http://localhost:4000/img/products/${req.file.filename}` : 'http://localhost:4000/img/no-image.jpg',
                apiProduct: `http://localhost:4000/api/products/${id}`,
                createdAt: date
            }
            console.log(newProduct)
            const createdProduct = await Products.create(newProduct)  
            
            res.redirect('/products/'+ createdProduct.id) 
        }
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

            res.redirect('/products')
        } 
    },
    delete: async function (req, res, next){
        let product = await Products.findOne({where: {id: req.params.id}})

         if (!product) res.status(418).send('El Producto No Existe')
         else {
            await product.destroy()
            res.redirect('/products')
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