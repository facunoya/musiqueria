const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const cartControllers = require('../controllers/cartControllers')

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

router.get('/cart', cartControllers.getCart)
router.post('/cart', cartControllers.endSale)
router.post('/fullSale', cartControllers.endFullSale)

module.exports = router
