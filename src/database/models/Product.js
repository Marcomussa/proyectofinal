module.exports = (sequelize, dataTypes) => {
    let alias = 'Products'

    let cols = {
        id : {
            type: dataTypes.STRING(500),
            primaryKey: true
            
        },
        name: {
            type: dataTypes.STRING(100)
        }, 
        description: {
            type: dataTypes.STRING(500)
        }, 
        price: {
            type: dataTypes.INTEGER
        }, 
        category_id: {
            type: dataTypes.INTEGER
        }, 
        discount: {
            type: dataTypes.INTEGER
        }, 
        image: {
            type: dataTypes.STRING(500)
        },
        image_url: {
            type: dataTypes.STRING(500)
        },
        apiProduct: {
            type: dataTypes.STRING(500)
        },
        createdAt: {
            type: dataTypes.DATE(6)
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo(Category, {
            as: "categories",
            foreignKey: "category_id"
        })}
    alias.associate = function () {
        alias.hasMany(Wishlist, {
            as: "Wishlist",
            foreignKey: "product_id",
        })}
    alias.associate = function () {
        alias.hasMany(OrderDetail, {
            as: "order_details",
            foreignKey: "product_id",
        })}

    const Product = sequelize.define(alias,cols,config)
    
    return Product
}