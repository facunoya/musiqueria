const fs = require('fs');
const path = require('path');
const db = require('../../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')

const apiUser = {
    getUsers: (req, res) => {
        let profile;
        if (req.session.userLogged != undefined) {

            profile = req.session.userLogged.profile
        } else {
            profile = null
        }
        db.Users.findAll()
            .then((usuarios) => {
                return res.json({ usuarios, profile })
            })

            .catch((e) => { return res.status(404).send({ "message": "Error " + e }) })


    },
    getCarts: (req, res) => {
        db.Carts.findAll({
            include: [{ association: "Products" }, { association: "Users" }]
        })
            .then((carts) => {
                return res.json({ carts })
            })

            .catch((e) => { return res.send({ "message": "Error " + e }) })


    },
    getOneCart: (req, res) => {
        let id = req.params.id
        db.Carts.findAll({
            include: [{ association: "Products" }, { association: "Users" }],
            where: {
                user_id: id
            }
        })
            .then((carts) => {
                if (carts != "") {

                    return res.json({ carts })
                }
                res.status(401).send("no tiene compras y no deberia haber llegado aqui")
            })

            .catch((e) => { return res.status(500).send({ "message": "Error " + e }) })


    },
    seeYourBuy: (req, res) => {

        let id = req.session.userLogged.user_id
        db.SalesHeaders.findAll({
            include: [{ association: "Users" }, { association: "SalesDetails" }],
            where: {
                user_id: id
            }
        })
            .then((carts) => {
                if (carts != "") {
                    console.log(carts[0].dataValues)
                    //return res.render('./cart/myBuys', { carts })

                    return res.json({ carts })
                }
                res.send("no tiene compras y no deberia haber llegado aqui")
            })

            .catch((e) => { return res.send({ "message": "Error " + e }) })


    },
    getEdit: async (req, res) => {

        await db.Users.findAll()
            .then(async (res) => {

                const idUrl = req.params.id
                const usuario = await res.filter(x => x.user_id == idUrl)
                return usuario
            })
            .then(user => {
                return res.json({ user })
            })

            .catch((e) => { return res.status(404).send({ "message": "Error " + e }) })
    }


}
module.exports = apiUser