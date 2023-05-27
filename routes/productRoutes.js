const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const productControllers = require('../controllers/productControllers')
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
router.use(methodOverride('_method'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json())


router.get('/all', productControllers.getProducts)
router.post('/all', productControllers.product)
router.get('/create', profileAuthMiddleware, productControllers.getCreate)
router.post('/create', profileAuthMiddleware, productControllers.create)
router.get('/modifyproduct/:id', profileAuthMiddleware, productControllers.getEdit)
router.put('/modifyproduct/:id', profileAuthMiddleware, productControllers.edit)
router.delete('/modifyproduct/:id', profileAuthMiddleware, productControllers.delete)



module.exports = router
