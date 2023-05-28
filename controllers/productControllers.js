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
                return res.render('./product/products', { productos })
            })


    },

    //Esta es la función de COMPRAR
    product: async (req, res) => {
        if (req.session.userLogged != undefined) {
            const id = req.session.userLogged.user_id
            const result = { ...req.body }
            const allCarts = await db.Carts.findAll()
            const userFilter = await allCarts.filter(x => x.user_id == id)
            const productFilter = await userFilter.filter(x => x.product_id == result.product_id)
            const selectedProducts = await db.Products.findByPk(result.product_id)

            const data = {
                product_id: result.product_id,
                user_id: id,
                quantity: 1
            }

            if (userFilter != "" || userFilter != undefined) {
                if (selectedProducts.stock >= 1) {
                    if (productFilter != "") {

                        let acum = productFilter[0].quantity + 1
                        selectedProducts.stock--
                        data.quantity = acum
                        await selectedProducts
                        db.Products.update({ ...selectedProducts.dataValues }, { where: { product_id: selectedProducts.dataValues.product_id } })
                        db.Carts.update({ ...data }, { where: { cart_id: productFilter[0].cart_id } })
                    } else {
                        selectedProducts.stock--
                        await selectedProducts
                        db.Products.update({ ...selectedProducts.dataValues }, { where: { product_id: selectedProducts.dataValues.product_id } })
                        db.Carts.create(data)

                    }
                } else {

                    return res.send('No queda stock de ese producto')
                }

            }

            res.redirect('/cart/cart')
        } else {
            res.send('debes loguearte para poder comprar')
        }
    },
    getSubCategories: (req, res) => {
        db.SubCategories.findAll({
            include: [{ association: "Categories" }]
        })
            .then((categories) => {
                return res.send(categories)
            })


    },
    getCreate: (req, res) => {
        db.Products.findAll({
            include: [{ association: "SubCategories" }]
        })
            .then((productos) => {
                return res.render('./product/createProduct', { productos })
            })

    },
    create: (req, res) => {
        const productImg = req.file.filename
        const data = { ...req.body, productImg: productImg }
        db.Products.create(data)
        db.Products.findAll({
            include: [{ association: "SubCategories" }]
        })

        return res.redirect('/product/all')

    },
    getEdit: async (req, res) => {
        const allProducts = await db.Products.findAll()
        const idUrl = req.params.id
        const producto = allProducts.filter(x => x.product_id == idUrl)
        console.log(producto)
        return res.render('./product/modifyProduct', { producto })
    },
    edit: (req, res) => {
        const productImg = req.file.filename
        db.Products.update({ ...req.body, productImg: productImg }, { where: { product_id: req.body.product_id } })

        res.redirect('/product/all')
    },
    delete: (req, res) => {
        let result = req.params.id
        db.Products.destroy({ where: { product_id: result } })

        res.redirect('/product/all')
    }

}
module.exports = productControllers