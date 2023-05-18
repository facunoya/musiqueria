const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const cookieAuthMiddleware = async (req, res, next) => {
    if (req.cookies.remember != undefined && req.session.userLogged == undefined) {
        const allUsers = await db.Users.findAll()
        const email = req.cookies.remember
        const findUser = await allUsers.filter(x => x.email == email)
        if (findUser != "") {
            req.session.userLogged = findUser[0].dataValues
        }
        console.log(findUser[0].dataValues)
        console.log(req.session.userLogged.name)
    }
    next()
}

module.exports = cookieAuthMiddleware