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
      alias.associate = function () {
        alias.hasMany(Product, {
            as: "Product",
            foreignKey: "category_id",
        })}

    const Category = sequelize.define(alias,cols,config)
    
    return Category
} 