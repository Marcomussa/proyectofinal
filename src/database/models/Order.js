module.exports = (sequelize, dataTypes) => {
    let alias = 'Orders'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true
            
        },
        total_price: {
            type: dataTypes.INTEGER,
        }, 
        payment_date: {
            type: dataTypes.DATE
        }, 
        user_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'orders',
        timestamps: false
    }

    const Orders = sequelize.define(alias,cols,config)
    
    return Orders
}