const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')

const userControllers = {
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
    createUser: async (req, res) => {
        await db.Users.create({
            "name": "Agostina",
            "email": "agos@gmail.com",
            "password": "123456",
            "avatar": "Agos.jpg",
            "profile": "Administrador"
        })
        db.Users.findAll()
            .then((users) => {
                return res.send(users)
            })
    },
    getRegister: (req, res) => {
        res.render('./user/register')
    },
    register: async (req, res) => {

        //Falta encriptar contraseña 
        //Falta configurar Multer y pasar el input a tipo File
        //Falta configurar express-validator para las validaciones
        //Faltan la validaciones del front con onsubmit,supongo que usando .fetch para comparar datos con el usuario de base de datos.


        const data = { ...req.body }
        const allUsers = await db.Users.findAll()
        const dBUser = allUsers.filter(x => x.email == data.email)
        if (dBUser != "") {
            res.send("Ese correo ya se encuentra registrado")
        } else {
            db.Users.create(
                { ...data }
            )
            res.send('usuario creado con èxito')
        }

    }

}
module.exports = userControllers