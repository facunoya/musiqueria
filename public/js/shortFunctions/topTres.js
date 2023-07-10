
/*--------------Esta función es para los 4 mas vendidos!!------------*/

const fs = require('fs');
const { Op } = require('sequelize')
const path = require('path');
const db = require('../../../database/models')
const sequelize = db.sequelize

const top3 =
    async (req, res) => {
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
        res.json(tresMasVendidos)


    }

module.exports = top3