const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const mainControllers = {
    getIndex: async (req, res) => {
        const arreglo = []
        await db.SalesDetails.findAll({
            include: [{ association: "Products" }]
        })
            .then(data => {
                data.forEach(element => {
                    arreglo.push(element.Products.product_id)
                });
            })
        arreglo.sort()
        let unicosElementos = []
        let almacenadorDeVecesRepetidas = []
        let contador = 1;
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i + 1] == arreglo[i]) {
                contador++;
            } else {
                unicosElementos.push(arreglo[i])
                almacenadorDeVecesRepetidas.push(contador);
                contador = 1
            }
        }
        const productosVendidos = []
        const tresMasVendidos = []
        for (let j = 0; j < unicosElementos.length; j++) {
            const prod = {
                id: unicosElementos[j],
                cuantity: almacenadorDeVecesRepetidas[j]
            }
            productosVendidos.push(prod)
        }
        productosVendidos.sort((a, b) => a.cuantity - b.cuantity)
        tresMasVendidos.push(productosVendidos.pop())
        tresMasVendidos.push(productosVendidos.pop())
        tresMasVendidos.push(productosVendidos.pop())
        tresMasVendidos.push(productosVendidos.pop())
        const DbProducts = await db.Products.findAll({
            include: [{ association: "SubCategories" }]
        })
            .then((allProducts) => {
                return allProducts

            })
        const cuatroMasVendidos = []
        for (let i = 0; i < DbProducts.length; i++) {

            for (let j = 0; j < tresMasVendidos.length; j++) {
                if (DbProducts[i].product_id == tresMasVendidos[j].id) {
                    cuatroMasVendidos.push(DbProducts[i])
                }

            }
        }


        let productos = await db.Products.findAll({
            include: [{ association: "SubCategories" }]
        })
            .then((productos) => {
                return productos

            })
        if (req.session.userLogged != undefined) {
            const user = req.session.userLogged
            res.render('index', { user, productos, cuatroMasVendidos })
        }
        else {
            const user = null
            res.render('index', { user, productos, cuatroMasVendidos })
        }
    },


    logOut: (req, res) => {
        res.clearCookie('remember')
        req.session.destroy()
        return res.redirect('/')
    }

}
module.exports = mainControllers