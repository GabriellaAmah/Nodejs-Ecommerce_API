import express from 'express';
import isAuth from '../middleware/isAuth.js';
import getOrder from '../subscribers/orders/getOrders.js';
import postOrder from '../subscribers/orders/postOrder.js';

const router = express.Router();

router.post('/', isAuth, postOrder);

router.get('/', isAuth , getOrder)

export default router;