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

        //ACA poner el perfil de usuario para el boton editar
        db.Users.findAll()
            .then((usuarios) => {
                return res.json({ usuarios, profile })
            })


    },
    getCarts: (req, res) => {
        db.Carts.findAll({
            include: [{ association: "Products" }, { association: "Users" }]
        })
            .then((carts) => {
                return res.json({ carts })
            })


    },
    /*createUser: async (req, res) => {
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


        //Falta configurar express-validator para las validaciones
        //Faltan la validaciones del front con onsubmit,supongo que usando .fetch para comparar datos con el usuario de base de datos.
        let errors = validationResult(req)


        if (errors.isEmpty()) {
            const avatar = req.file.filename
            const data = { ...req.body, password: bcryptjs.hashSync(req.body.password, 10), avatar: avatar }
            const allUsers = await db.Users.findAll()
            const dBUser = allUsers.filter(x => x.email == data.email)
            if (dBUser != "") {
                res.send("Ese correo ya se encuentra registrado")
            } else {
                db.Users.create(
                    { ...data }
                )
                res.redirect('/user/login')
            }
        } else {
            res.render('user/register', { "errors": errors.mapped(), "old": req.body })
        }

    },*/
    getLogin: (req, res) => {
        res.render('./user/login')
    },
    /*login: async (req, res) => {
        let errors = validationResult(req)


        if (errors.isEmpty()) {
            const allUsers = await db.Users.findAll()
            const data = { ...req.body }
            const dBUser = allUsers.filter(x => x.email == data.email)
            if (dBUser != "") {
                let isMatch = bcryptjs.compareSync(req.body.password, dBUser[0].password)
                if (isMatch) {
                    req.session.userLogged = dBUser[0]
                    if (req.body.remember != undefined) {
                        res.cookie('remember', dBUser[0].email, { maxAge: 6 * 10000 * 60 * 24 * 10 })
                    }
                    res.redirect('/')

                } else {
                    res.send('Contraseña incorrecta')
                }

            } else {
                res.send("No estas registrado")
            }

        } else {
            res.render('user/login', { "errors": errors.mapped(), "old": req.body })
        }



    },*/
    getEdit: async (req, res) => {
        º
        const allUsers = await db.Users.findAll()
        const idUrl = req.params.id
        const usuario = allUsers.filter(x => x.user_id == idUrl)
        console.log(usuario)
        return res.json({ usuario })
    }
    /*edit: (req, res) => {
        const avatar = req.file.filename
        db.Users.update({ ...req.body, password: bcryptjs.hashSync(req.body.password, 10), avatar: avatar }, { where: { user_id: req.body.user_id } })

        res.redirect('/user/all')
    },
    delete: (req, res) => {
        let result = req.params.id
        db.Users.destroy({ where: { user_id: result } })

        res.redirect('/user/all')
    }*/

}
module.exports = apiUser