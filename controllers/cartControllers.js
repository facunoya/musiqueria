const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const cartControllers = {
    getCart: async (req, res) => {
        const carrito = await db.Carts.findAll(
            {
                include: [{ association: "Products" }, { association: "Users" }]
            }
        )
        console.log(carrito)
        res.render('./cart/cart', { carrito })
    }

}
module.exports = cartControllers