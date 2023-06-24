const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const cartControllers = {
    getCart: async (req, res) => {
        let user = req.session.userLogged
        let profile = req.session.userLogged.profile
        const userCart = await db.Carts.findAll(
            {
                include: [{ association: "Products" }, { association: "Users" }],
                where: {
                    user_id: user.user_id
                }
            }
        )
        if (userCart != "") {
            console.log(userCart)
            res.render('./cart/cart', { userCart, profile, user })
        } else {
            // console.log(userCart[0].dataValues.Users.email)
            console.log(user.email)
            console.log('no tiene productos en su carrito')
            res.send('No tiene productos en su carrito')
        }


    },

    //la funcion de la fecha esta mal, y no econtre la relacion entre el salesheader_id y el salesdetails_id
    endSale: async (req, res) => {
        const cart_id = req.body.cart_id
        const selectedCartProduct = await db.Carts.findByPk(cart_id)
        const selectedProduct = await db.Products.findByPk(selectedCartProduct.product_id)


        const salesHeader = {
            user_id: selectedCartProduct.user_id,
            dateSale: Date.now(),
            total: selectedProduct.dataValues.price
        }
        await db.SalesHeaders.create(salesHeader)
        const sheader = await db.SalesHeaders.findAll()
        // const salesDetails = {
        //     salesheader_id
        // }
        const ultimoId = sheader.pop().salesheader_id
        const salesDetail = {
            product_id: selectedCartProduct.product_id,
            salesheader_id: ultimoId,
            price: (selectedProduct.dataValues.price * selectedCartProduct.quantity),
            quantity: selectedCartProduct.quantity
        }
        await db.SalesDetails.create(salesDetail)
        await db.Carts.destroy({
            where: {
                cart_id: req.body.cart_id
            }
        })

        return res.redirect('/cart/cart')


    },
    endFullSale: async (req, res) => {
        const userCart = await db.Carts.findAll({
            include: [{ association: "Products" }],
            where: {
                user_id: req.body.user_id
            }
        })
        let totalPrice = 0
        for (let i = 0; i < userCart.length; i++) {
            totalPrice += (parseFloat(userCart[i].Products.price) * parseFloat(userCart[i].quantity))
        }

        const newSalesHeader = {
            user_id: req.body.user_id,
            dateSale: Date.now(),
            total: totalPrice
        }
        let newSale = await db.SalesHeaders.create(newSalesHeader)
        userCart.forEach(async (cartProduct) => {
            const salesDetail = {
                product_id: cartProduct.product_id,
                salesheader_id: newSale.salesheader_id,
                price: (cartProduct.Products.price * cartProduct.quantity),
                quantity: cartProduct.quantity
            }
            await db.SalesDetails.create(salesDetail)
            await db.Carts.destroy({
                where: {
                    cart_id: cartProduct.cart_id
                }
            })
        })

        return await res.redirect('/cart/cart')
    },
    deleteSale: async (req, res) => {
        const id = req.params.id
        const cart = await db.Carts.findByPk(id)
        const selectedProduct = await db.Products.findByPk(cart.product_id)

        if (cart) {
            console.log('VAMOS por ACA: cantidad:', cart.quantity)
            console.log('VAMOS por ACA: stock:', selectedProduct.dataValues.stock)
            let quantity = cart.quantity
            let oldStock = selectedProduct.dataValues.stock
            let newStock = quantity + oldStock
            console.log("el nuevo stock es: ", newStock)
            db.Products.update({ stock: newStock }, { where: { product_id: cart.product_id } })
            db.Carts.destroy({
                where: {
                    cart_id: cart.cart_id
                }
            })
        }
        res.send('Producto eliminado de su carrito')
    }
}
module.exports = cartControllers