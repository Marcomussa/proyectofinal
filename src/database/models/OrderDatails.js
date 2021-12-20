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

    const OrderDetail = sequelize.define(alias,cols,config)
    
    return OrderDetail
}