/* eslint-disable node/no-unsupported-features/es-syntax */
import User from '../../models/userModel.js'
import Order from '../../models/orderModel.js'

async function postOrder(req, res, next) {
    try {
        const { userId } = req;
        let newOrder;
        let order;
        const userOrderExist = await Order.findOne({ userId })
        const user = await User.findById(userId);
        const userCart = await user.populate('cart.items.productId').execPopulate();
        const orderProduct = await userCart.cart.items.map(items => {
            return { productData: { ...items.productId._doc }, quantity: items.quantity }
        })

        if (userOrderExist) {
           let newAddProduct = [ ...orderProduct]
           userOrderExist.product = newAddProduct;
          order = await userOrderExist.save()
        }else{
            newOrder = new Order({ userId, product : orderProduct})
            order = await newOrder.save()
        }

        res.status(201).json({
            message: "this order has been added",
            order
        })

    } catch (error) {
        if (!error.status) {
            error.status = 422;
        }
        next(error)
    }
}

export default postOrder