module.exports = (sequelize, dataTypes) => {
    let alias = 'Products'

    let cols = {
        name: {
            type: dataTypes.STRING(100)
        }, 
        description: {
            type: dataTypes.STRING(500)
        }, 
        price: {
            type: dataTypes.DECIMAL
        }, 
        category_id: {
            type: dataTypes.DECIMAL
        }, 
        updateAt: {
            type: dataTypes.DATEONLY
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias,cols,config)

    return Product
}