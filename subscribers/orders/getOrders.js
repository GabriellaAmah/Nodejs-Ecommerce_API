import Order from '../../models/orderModel.js'

async function getOrder(req, res, next) {
    try {
        const { userId } = req;

        let userOrder = await Order.findOne({ userId });

        res.status(200).json({
            message : "users order",
            order : userOrder
        })


    } catch (error) {
        next(error)
    }
}

export default getOrder