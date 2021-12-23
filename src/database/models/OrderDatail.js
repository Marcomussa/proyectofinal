module.exports = (sequelize, dataTypes) => {
    let alias = 'OrdersDetails'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true
            
        },
        amount: {
            type: dataTypes.INTEGER
        }, 
        product_id: {
            type: dataTypes.INTEGER
        }, 
        order_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'orders_details',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo(Product, {
            as: "product",
            foreignKey: "product_id"
        })}
    alias.associate = function () {
        alias.belongsTo(Order, {
            as: "order",
            foreignKey: "order_id"
        })}

    const OrderDetail = sequelize.define(alias,cols,config)
    
    return OrderDetail
}