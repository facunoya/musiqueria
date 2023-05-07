const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const apiControllers = {
    getSalesDetails: async (req, res) => {
        await db.SalesDetails.findAll({
            include: [{ association: "Products" }]
        })
            .then((sales) => {
                return res.json(sales)
            })


    },
    getSalesHeaders: async (req, res) => {
        await db.SalesHeaders.findAll({
            include: [{ association: "Users" }]
        })
            .then((sales) => {
                return res.json(sales)
            })


    },
    getProducts: (req, res) => {
        db.Products.findAll({
            include: [{ association: "SubCategories" }]
        })
            .then((productos) => {
                return res.json(productos)
            })


    },
    getSubCategories: (req, res) => {
        db.SubCategories.findAll({
            include: [{ association: "Categories" }]
        })
            .then((categories) => {
                return res.send(categories)
            })


    },
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


}
module.exports = apiControllers