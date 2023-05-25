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


    },

    //la funcion de la fecha esta mal, y no econtre la relacion entre el salesheader_id y el salesdetails_id
    endSale: async (req, res) => {
        const idCompra = req.body.cart_id
        const compraSeleccionada = await db.Carts.findByPk(idCompra)
        const productoSeleccionado = await db.Products.findByPk(compraSeleccionada.product_id)


        const salesHeader = {
            user_id: compraSeleccionada.user_id,
            dateSale: Date.now(),
            total: productoSeleccionado.dataValues.price
        }
        await db.SalesHeaders.create(salesHeader)
        const sheader = await db.SalesHeaders.findAll()
        // const salesDetails = {
        //     salesheader_id
        // }
        const ultimoId = sheader.pop().salesheader_id
        const salesDetail = {
            product_id: compraSeleccionada.product_id,
            salesheader_id: ultimoId,
            price: (productoSeleccionado.dataValues.price * compraSeleccionada.quantity),
            quantity: compraSeleccionada.quantity
        }
        await db.SalesDetails.create(salesDetail)

        return res.json(salesDetail)


    }

}
module.exports = cartControllers