const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const userControllers = {
    getUsers: (req, res) => {
        db.Users.findAll()
            .then((users) => {
                return res.send(users)
            })


    },
    getCarts: (req, res) => {
        db.Carts.findAll({
            include: [{ association: "Products" }, { association: "Users" }]
        })
            .then((carts) => {
                return res.send(carts)
            })


    },
    createUser: async (req, res) => {
        await db.Users.create({
            "name": "Agostina",
            "email": "agos@gmail.com",
            "password": "123456",
            "avatar": "Agos.jpg",
            "profile": "Administrador"
        })
        db.Users.findAll()
            .then((users) => {
                return res.send(users)
            })
    }

}
module.exports = userControllers