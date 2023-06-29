const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const profileAuthMiddleware = async (req, res, next) => {
    if (req.session.userLogged != "" && req.session.userLogged) {

        const user = req.session.userLogged
        const acepted = user.profile
        if (acepted == "Administrador") {

            next()
        } else {
            return res.render('./partials/401')
        }
    } else {

        return res.render('./partials/401')
    }

}

module.exports = profileAuthMiddleware