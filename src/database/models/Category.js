module.exports = (sequelize, dataTypes) => {
    let alias = 'Categories'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true
            
        },
        name: {
            type: dataTypes.STRING(100)
        }
    }

    let config = {
        tableName: 'categories',
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,config)
    
    return Category
}