const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const mainControllers = {
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


    }


}
module.exports = mainControllers