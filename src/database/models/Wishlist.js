module.exports = (sequelize, dataTypes) => {
    let alias = 'Wishlist'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true
            
        },
        product_id: {
            type: dataTypes.INTEGER,
        }, 
        user_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'wishlist',
        timestamps: false
    }
     alias.associate = function () {
        alias.belongsTo(Product, {
            as: "product",
            foreignKey: "pruduct_id"
        })}
     alias.associate = function () {
        alias.belongsTo(User, {
            as: "user",
            foreignKey: "user_id"
        })}

    const Wishlist = sequelize.define(alias,cols,config)
    
    return Wishlist
}