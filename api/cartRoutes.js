import express from 'express';
import isAuth from '../middleware/isAuth.js';
import Cart from '../subscribers/cart/addCart.js';
import deleteCartItem from '../subscribers/cart/deleteCartItem.js';
import getCart from '../subscribers/cart/getCart.js';

let router = express.Router();

router.post('/:productId', isAuth, Cart);

router.get('/', isAuth, getCart);

router.delete('/delete/:productId', isAuth, deleteCartItem)

export default router