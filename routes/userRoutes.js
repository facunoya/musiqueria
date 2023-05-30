const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const userControllers = require('../controllers/userControllers');
const profileAuthMiddleware = require('../middlewares/profileAuthMiddleware')
const { body } = require('express-validator')
const userLoginValidation = [
    body('email').notEmpty().withMessage('Debes ingresar un Correo').isEmail().withMessage(' '),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña')
]

const userRegisterValidation = [
    body('name').isLength({ min: 3 }).withMessage('Al menos debe tener 3 caracteres'),
    body('email').notEmpty().withMessage('Debes ingresar un Correo').isEmail().withMessage(' '),
    body('password').isLength({ min: 6 }).withMessage('Al menos debe tener 6 caracteres')
]


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
router.post('/register', userFileUpload.single('avatar'), userRegisterValidation, userControllers.register)
router.get('/login', userControllers.getLogin)
router.post('/login', userLoginValidation, userControllers.login)
router.get('/all', userControllers.getUsers)
router.get('/modifyuser/:id', profileAuthMiddleware, userFileUpload.single('avatar'), userControllers.getEdit)
router.put('/modifyuser/:id', profileAuthMiddleware, userFileUpload.single('avatar'), userControllers.edit)
router.delete('/modifyuser/:id', profileAuthMiddleware, userControllers.delete)


module.exports = router