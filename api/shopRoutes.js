import express from 'express';
import isAuth from '../middleware/isAuth.js';
import { home, getAllProduct, getProductById, getProductByCategory } from '../subscribers/shop/index.js'
const router = express.Router();

router.get('/', home);

router.get('/products', getAllProduct)

router.get('/product/detail/:_id', isAuth, getProductById)

router.get('/product?', isAuth, getProductByCategory)

export default router