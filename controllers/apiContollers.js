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
                return res.status(200).json(sales)
            })

            .catch((e) => {
                return res.status(404).send({
                    "message": "Error mony" + e
                })
            })
    },
    tresMasVendidos: async (req, res) => {
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
        res.send(tresMasVendidos)
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