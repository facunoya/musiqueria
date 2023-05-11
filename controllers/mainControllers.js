const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const mainControllers = {
    getIndex: (req, res) => {
        res.render('index')
    }

}
module.exports = mainControllers