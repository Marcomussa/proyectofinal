module.exports = (sequelize, dataTypes) => {
    let alias = 'Users'

    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING(100)
        },
        surname: {
            type: dataTypes.STRING(100)
        },
        email: {
            type: dataTypes.STRING(100)
        }, 
        password: {
            type: dataTypes.STRING(100)
        },
        gender: {
            type: dataTypes.STRING(100)
        },
        avatar:{
            type: dataTypes.STRING(255)
        },
         apiUser:{
            type: dataTypes.STRING(255)}
    }

    let config = {
        tableName : 'users',
        timestamps: false
    }
    alias.associate = function () {
        alias.belogsTo(Orders, {
            as: "orders",
            foreignKey: "user_id",
        })}
    alias.associate = function () {
        alias.belogsTo(Wishlist, {
            as: "wishlist",
            foreignKey: "user_id",
        })}

    const User = sequelize.define(alias, cols, config)

    return User
}