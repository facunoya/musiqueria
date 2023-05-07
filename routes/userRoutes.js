const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const userControllers = require('../controllers/userControllers');


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/img')
        callback(null, folder)
    },
    filename: (req, file, callback) => {
        let imgURL = 'img-' + Date.now() + path.extname(file.originalname);
        callback(null, imgURL)
    }
});
let fileUpload = multer({ storage: storage });

// router.get('/create', userControllers.createUser) // anda pero crea por el hecho de entrar usarla cuando sea necesario



module.exports = router