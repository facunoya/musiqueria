const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const productControllers = {
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


    }

}
module.exports = productControllers