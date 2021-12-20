module.exports = (sequelize, dataTypes) => {
    let alias = 'Products'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
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
        }
    }

    let config = {
        tableName: 'Products',
        timestamps: false
    }

    const Product = sequelize.define(alias,cols,config)
    
    return Product
}