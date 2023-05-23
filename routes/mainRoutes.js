const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const mainControllers = require('../controllers/mainControllers')

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


router.get('/', mainControllers.getIndex)
router.post('/', mainControllers.logOut)

module.exports = router