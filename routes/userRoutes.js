const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const userControllers = require('../controllers/userControllers');
const profileAuthMiddleware = require('../middlewares/profileAuthMiddleware')


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
router.use(express.json());

// router.get('/create', userControllers.createUser) // anda pero crea por el hecho de entrar usarla cuando sea necesario
router.get('/register', userFileUpload.single('avatar'), userControllers.getRegister)
router.post('/register', userFileUpload.single('avatar'), userControllers.register)
router.get('/login', userControllers.getLogin)
router.post('/login', userControllers.login)
router.get('/all', userControllers.getUsers)
router.get('/modifyuser/:id', profileAuthMiddleware, userFileUpload.single('avatar'), userControllers.getEdit)
router.put('/modifyuser/:id', profileAuthMiddleware, userFileUpload.single('avatar'), userControllers.edit)
router.delete('/modifyuser/:id', profileAuthMiddleware, userControllers.delete)


module.exports = router