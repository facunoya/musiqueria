const db = require('../database/models')
const sequelize = db.sequelize
const { Op, QueryTypes } = require('sequelize')

const mainControllers = {
    getIndex: async (req, res) => {
        const cuatroMasVendidos = await sequelize.query("SELECT P.*, SUM(quantity) as TOTAL FROM `salesdetails` S INNER JOIN products P ON S.product_id = P.product_id group by product_id order by TOTAL DESC LIMIT 4", { type: QueryTypes.SELECT });
        let productos = await db.Products.findAll({
            include: [{ association: "SubCategories" }]
        })
            .then((productos) => {
                return productos

            })
        if (req.session.userLogged != undefined) {
            const user = req.session.userLogged
            res.render('index', { user, productos, cuatroMasVendidos })
        }
        else {
            const user = null
            res.render('index', { user, productos, cuatroMasVendidos })
        }
    },


    logOut: (req, res) => {
        res.clearCookie('remember')
        req.session.destroy()
        return res.redirect('/')
    }

}
module.exports = mainControllers