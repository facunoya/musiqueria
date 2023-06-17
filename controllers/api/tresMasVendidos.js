const fs = require('fs');
const path = require('path');
const db = require('../../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')
const tresMasVendidos = {
    topTres: async (req, res) => {
        const sales = await db.SalesHeaders.findAll()
        return sales
    }
}
console.log(tresMasVendidos.topTres())
module.exports = tresMasVendidos
