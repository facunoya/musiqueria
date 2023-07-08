const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const apiControllers = require('../controllers/apiContollers')
const apiUser = require('../controllers/api/apiUser')
const logedMiddleware = require('../middlewares/logedMiddleware')
const profileAuthMiddleware = require('../middlewares/profileAuthMiddleware')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img')
        callback(null, folder)
    },
    filename: (req, file, callback) => {
        let imgURL = 'img-' + Date.now() + path.extname(file.originalname);//nose porque no me guarda el nombre bien
        callback(null, imgURL)
    }
});
let fileUpload = multer({ storage: storage });

router.get('/salesdetails', apiControllers.getSalesDetails)
router.get('/top3', apiControllers.tresMasVendidos)
router.get('/salesheaders', apiControllers.getSalesHeaders)
router.get('/carts', apiControllers.getCarts)
router.get('/subcategories', apiControllers.getSubCategories)
router.get('/allproducts', apiControllers.getProducts)
router.get('/allusers', apiControllers.getUsers)
router.get('/api/users', apiUser.getUsers)
router.get('/api/cart', apiUser.getCarts)
router.get('/api/edituser/:id', apiUser.getEdit)
router.get('/api/onecart/:id', logedMiddleware, apiUser.seeYourBuy)//se le podria agregar validaciones para que el GET de la url que este mas ligado, a si es su ID



module.exports = router