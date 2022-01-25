
const  { Products, Users, Categories }  = require("../database/models");

let mainController = {
    index: function (req, res, next){
        Products.findAll()
        .then((par) => {
            res.render('index', { productList: par}
        )})
        .catch(err => console.log(err))
    },
    payment: function(req, res){
        res.render('paymentMethods')
    },
    apiProducts: (req, res) => {
        Products.findAll()
        .then((par) => {
            res.json({
                count: par.length,
                products: par
            })
        })
        .catch(err => console.log(err))
    },
    apiProductsDetail: (req, res) => {
        Products.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((par) => {
            res.json(par)
        })
        .catch(err => console.log(err))
    },
    apiUsers: (req, res) => {
        Users.findAll()
        .then((par) => {
            res.json({
                count: par.length,
                users: par
            })
        })
        .catch(err => console.log(err))
    },
    apiUsersDetail: (req, res) => {
        Users.findOne({
            where: {
                id: req.params.email
            }
        })
        .then((par) => {
            const {id, name, surname, email, gender, avatar} = par
            res.json({
                id,
                name,
                surname,
                email,
                gender,
                avatar
            })
        })
        .catch(err => console.log(err))
    },
    apiCategories: (req, res) => {
        Categories.findAll()
        .then( (par) => {
            res.json({
                count: par.length,
                categories: par
            })           
        })
        .catch(err => console.log(err))
    },
    apiProdsInCategory: (req, res) => {
        let count_1 = 0
        let count_2 = 0
        let count_3 = 0
        let count_4 = 0
        let count_5 = 0
        let count_6 = 0
        let count_7 = 0

        Products.findAll()
        .then((par) => {
            for(let i = 0; i < par.length; i++){
                if(par[i].category_id == 1){
                    count_1 += 1
                }
                if(par[i].category_id == 2){
                    count_2 += 1
                }
                if(par[i].category_id == 3){
                    count_3 += 1
                }
                if(par[i].category_id == 4){
                    count_4 += 1
                }
                if(par[i].category_id == 5){
                    count_5 += 1
                }
                if(par[i].category_id == 6){
                    count_6 += 1
                }
                if(par[i].category_id == 7){
                    count_7 += 1
                }
            }

            Categories.findAll()
            .then((category) => {
                res.json(
                [{ 
                    id: category[0].id,
                    name: category[0].name,
                    count: count_1,
                }, {
                    id: category[1].id,
                    name: category[1].name,
                    count: count_2, 
                }, {
                    id: category[2].id,
                    name: category[2].name,
                    count: count_3,
                }, {
                    id: category[3].id,
                    name: category[3].name,
                    count: count_4,
                }, {
                    id: category[4].id,
                    name: category[4].name,
                    count: count_5,
                }, {
                    id: category[5].id,
                    name: category[5].name,
                    count: count_6,
                }, {
                    id: category[6].id,
                    name: category[6].name,
                    count: count_7
                }])
            })
            .then(err => console.log(err))
        })
        .catch(err => console.log(err))

    },
    apiLastProducts: (req, res) => {
        Products.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then( (par) => {
            res.json(par)           
        })
        .catch(err => console.log(err))
    }
}

module.exports = mainController