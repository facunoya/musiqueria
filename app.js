const express = require('express');
const app = express()
const session = require('express-session');
const path = require('path')
const cookieParser = require("cookie-parser");
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const mainRoutes = require('./routes/mainRoutes')
const apiRoutes = require('./routes/apiRoutes')
const cartRoutes = require('./routes/cartRoutes')
const methodOverride = require('method-override');

app.use(express.static('public'));
app.use(session({
    secret: 'Mi string secreto',
    expires: new Date(Date.now() + (30 * 86400 * 1000))
}))
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


app.use(cookieParser())
app.use('/product', productRoutes)
app.use('/user', userRoutes)
app.use(mainRoutes)
app.use('/api', apiRoutes)
app.use('/cart', cartRoutes)

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3020, () => {
    console.log('Corriendo musiqueria en puerto 3020...')
})