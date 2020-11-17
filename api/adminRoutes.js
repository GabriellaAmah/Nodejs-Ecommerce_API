import express from 'express';
import postProduct from '../subscribers/admin/postProduct.js';
import editProduct from '../subscribers/admin/editProduct.js';
import deleteProduct from '../subscribers/admin/deleteProduct.js'
import { getAllProduct } from '../subscribers/shop/index.js';
import isAuth from '../middleware/isAuth.js'
const router = express.Router();

router.post('/post-product', isAuth, postProduct);

router.get('/products', getAllProduct);

router.patch('/edit/:_id', isAuth, editProduct);

router.delete('/delete/:_id', isAuth, deleteProduct);

export default router;