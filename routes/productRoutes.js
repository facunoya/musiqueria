const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const productControllers = require('../controllers/productControllers')
const profileAuthMiddleware = require('../middlewares/profileAuthMiddleware')
const { body } = require('express-validator')
const createValidations = [
    body('name').notEmpty().withMessage('El producto debe tener un nombre'),
    body('subcategory_id').notEmpty().withMessage('Por favor, ingrese la subcategoria'),
    body('stock').notEmpty().withMessage('debe tener un stock'),
    body('description').notEmpty().withMessage('El producto debe tener una descripción'),
    body('colors').notEmpty().withMessage('El producto debe tener un color'),
    body('price').notEmpty().withMessage('El producto debe tener un precio'),
    body('brand').notEmpty().withMessage('El producto debe tener una marca'),
    // body('productImg').notEmpty().withMessage('El producto debe tener una imagen'),
]

const productsStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img')
        callback(null, folder)
    },
    filename: (req, file, callback) => {
        let img = 'img-' + Date.now() + path.extname(file.originalname);
        callback(null, img)
    }
});

let productsFileUpload = multer({ storage: productsStorage });

const usersStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img')
        callback(null, folder)
    },
    filename: (req, file, callback) => {
        let img = 'img-' + Date.now() + path.extname(file.originalname);
        callback(null, img)
    }
});

let userFileUpload = multer({ storage: usersStorage });


router.use(methodOverride('_method'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json())


router.get('/all', userFileUpload.single('avatar'), productControllers.getProducts)
router.post('/all', productControllers.product)
router.get('/create', profileAuthMiddleware, productControllers.getCreate)
router.post('/create', profileAuthMiddleware, productsFileUpload.single('productImg'), createValidations, productControllers.create)
router.get('/modifyproduct/:id', profileAuthMiddleware, productControllers.getEdit)
router.put('/modifyproduct/:id', profileAuthMiddleware, productsFileUpload.single('productImg'), createValidations, productControllers.edit)
router.delete('/modifyproduct/:id', profileAuthMiddleware, productControllers.delete)



module.exports = router
