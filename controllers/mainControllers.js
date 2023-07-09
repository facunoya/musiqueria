const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const mainControllers = {
    getIndex: (req, res) => {
        if (req.session.userLogged != undefined) {
            const user = req.session.userLogged
            res.render('index', { user })
        }
        else {
            const user = null
            res.render('index', { user })
        }
    },


    logOut: (req, res) => {
        res.clearCookie('remember')
        req.session.destroy()
        return res.redirect('/')
    }

}
module.exports = mainControllers