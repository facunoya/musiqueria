const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const logedMiddleware = async (req, res, next) => {
    if (req.session.userLogged != "" && req.session.userLogged) {

        const user = req.session.userLogged
        const acepted = user.profile
        if (acepted == "Administrador" || acepted == "Cliente") {

            next()
        } else {
            return res.send('Debes estar logueado')
        }
    } else {

        return res.send('debes estar logueado')
    }

}

module.exports = logedMiddleware