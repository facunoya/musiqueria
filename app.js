const express = require('express');
const app = express()
const session = require('express-session');
const path = require('path')
const cookieParser = require("cookie-parser");
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const mainRoutes = require('./routes/mainRoutes')
const apiRoutes = require('./routes/apiRoutes')


app.use(express.json())
app.use(express.static('public'));
app.use(session({
    secret: 'Mi string secreto',
    expires: new Date(Date.now() + (30 * 86400 * 1000))
}))

app.use(cookieParser())
app.use('/product', productRoutes)
app.use('/user', userRoutes)
app.use('/main', mainRoutes)
app.use('/api', apiRoutes)


app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3020, () => {
    console.log('Corriendo musiqueria en puerto 3020...')
})