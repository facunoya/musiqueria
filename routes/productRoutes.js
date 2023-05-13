const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const productControllers = require('../controllers/productControllers')

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
router.get('/create', productControllers.getCreate)
router.post('/create', productControllers.create)
router.get('/modifyproduct/:id', productControllers.getEdit)
router.put('/modifyproduct/:id', productControllers.edit)
router.delete('/modifyproduct/:id', productControllers.delete)



module.exports = router
