const express = require ('express')
const path = require('path')

const controlador = {
    index: function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/index.html'))
    },
    login: function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/login.html'))
    },
    cart: function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
    },
    product: function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'))
    },
    wishlist: function(req, res){
        res.sendFile(path.resolve(__dirname, '../views/wishlist.html'))
    }
}


module.exports = controlador