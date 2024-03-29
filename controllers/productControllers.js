const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')
const { validationResult } = require('express-validator')

const productControllers = {
    getProducts: (req, res) => {
        let profile;
        let user;
        let offset = 0; // Se modificarìa desde la Request
        if (req.session.userLogged != undefined) {
            user = req.session.userLogged
            profile = req.session.userLogged.profile
        } else {
            profile = null
            user = null
        }
        db.Products.findAll({
            include: [{ association: "SubCategories" }],
            order: [['subcategory_id']],
            limit: 10,
            offset: offset

        })
            .then((productos) => {

                return res.render('./product/products', { productos, profile, user, })

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
                let cantidad = req.body.quantity
                if (selectedProducts.stock >= 1 && cantidad <= selectedProducts.stock) {
                    if (productFilter != "") {
                        console.log("<------------ CANTIDAD: " + cantidad + "---------------->")
                        let cantidadAnterior = parseInt(productFilter[0].quantity)
                        let algo = parseInt(cantidad)
                        let acum = cantidadAnterior + algo
                        selectedProducts.stock = selectedProducts.stock - cantidad
                        data.quantity = acum
                        /*pasar esta linea al boton comprar del carrito*/
                        db.Products.update({ ...selectedProducts.dataValues }, { where: { product_id: selectedProducts.dataValues.product_id } })
                        db.Carts.update({ ...data }, { where: { cart_id: productFilter[0].cart_id } })
                    } else {
                        console.log("<------------- CANTIDAD: " + cantidad + "---------------->")
                        data.quantity = cantidad
                        selectedProducts.stock = selectedProducts.stock - cantidad

                        /*pasar esta linea al boton comprar del carrito*/
                        db.Products.update({ ...selectedProducts.dataValues }, { where: { product_id: selectedProducts.dataValues.product_id } })
                        db.Carts.create(data)
                    }
                } else {

                    return res.send('No queda stock de ese producto')

                }
            }
            res.redirect('/cart/cart')
        } else {
            res.redirect('/user/login')
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
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            const productImg = req.file.filename
            const data = { ...req.body, productImg: productImg }
            db.Products.create(data)
            db.Products.findAll({
                include: [{ association: "SubCategories" }]
            })

            return res.redirect('/product/all')
        } else {
            db.Products.findAll({
                include: [{ association: "SubCategories" }]
            })
                .then((productos) => {
                    return res.render('product/createProduct', { "errors": errors.mapped(), "old": req.body, productos })
                })

        }

    },
    getEdit: async (req, res) => {
        const allProducts = await db.Products.findAll()
        const idUrl = req.params.id
        const producto = allProducts.filter(x => x.product_id == idUrl)
        console.log(producto)
        return res.render('./product/modifyProduct', { producto })
    },
    edit: async (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            const productImg = req.file.filename
            db.Products.update({ ...req.body, productImg: productImg }, { where: { product_id: req.body.product_id } })

            res.redirect('/product/all')
        } else {
            const allProducts = await db.Products.findAll()
            const idUrl = req.params.id
            const producto = allProducts.filter(x => x.product_id == idUrl)
            console.log(producto)
            return res.render('./product/modifyProduct', { "errors": errors.mapped(), producto })
        }
    },
    delete: (req, res) => {//No funciona porque es FK, deberia borrarlo antes de todas las otras tablas
        // let result = req.params.id
        // db.Products.destroy({ where: { product_id: result } })

        // res.redirect('/product/all')
        res.send('Estamos trabajando en ello')
    }

}
module.exports = productControllers