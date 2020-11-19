import express from 'express';
import { default as Shop } from './api/shopRoutes.js';
import { default as Admin } from './api/adminRoutes.js'
import { default as bodyParser } from 'body-parser';
import { default as AuthRoutes } from './api/auth.js';
import { default as cartRoutes } from './api/cartRoutes.js'
import { default as orderRoutes } from './api/orderRoutes.js'
import errorHandler from './utils/errorHandler.js'
import imageUpload from './utils/uploads.js'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv'
// eslint-disable-next-line node/no-extraneous-import
import { default as cookieParser } from 'cookie-parser';
import helmet from 'helmet';
import logStreamFile from './utils/logginDetails.js'
import { home } from './subscribers/shop/index.js';


const app = express();
dotenv.config({ path: './config.env' })
app.use(helmet())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

let __dirname = path.resolve();
app.use(cookieParser('n0-go'))
app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(imageUpload);
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/shop/detail/images', express.static(path.join(__dirname, 'images')))
app.use('/shop', Shop)
app.use('/admin', Admin)
app.use('/auth', AuthRoutes)
app.use('/cart', cartRoutes)
app.use('/order', orderRoutes)
app.use('/', home)
app.use(errorHandler);


export default app