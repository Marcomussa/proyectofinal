const fs = require('fs')
const path = require('path')

const User = {
    filename: './users.json',

    getData: function(){
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, `../database/${this.filename}`), 'utf-8')) //de este archivo, el fileName, con encoding utf-8
    }, 

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser  = allUsers.pop(); //con el .pop() obtengo el ultimo usuario
        if (lastUser) { //si hay usuarios
            return lastUser.id + 1;
        }
        return 1; //si no hay usuarios
    },

    findAll: function () {
        return this.getData(); //metodo que busca a todos los usuarios
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id) //iteracion que el usuario que coincida con el id
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text) //iteracion que el usuario que coincida con el id
        return userFound;
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id); //recorre usuarios y entrega todos los que no coinciden con el id mencionado
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}


module.exports = User;