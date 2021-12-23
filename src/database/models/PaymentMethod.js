module.exports = (sequelize, dataTypes) => {
    let alias = 'PaymentMethods'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true
            
        },
        credit_card: {
            type: dataTypes.STRING(100)
        }, 
        bank_account: {
            type: dataTypes.STRING(500)
        }, 
        user_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'payment_methods',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo(User, {
            as: "payment_methods",
            foreignKey: "user_id"
        })}

    const PaymentMethod = sequelize.define(alias,cols,config)
    
    return PaymentMethod
}