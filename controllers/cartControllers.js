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

        let user = req.session.userLogged
        let miCarrito = carrito.filter(x => x.dataValues.Users.email == user.email)
        if (miCarrito != "") {
            console.log(miCarrito)
            res.render('./cart/cart', { miCarrito })
        } else {
            console.log(carrito[0].dataValues.Users.email)
            console.log(user.email)
            console.log('no tiene productos en su carrito')
            res.send('No tiene productos en su carrito')
        }


    }

}
module.exports = cartControllers