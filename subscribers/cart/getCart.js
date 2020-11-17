import User from "../../models/userModel.js";

async function getCart(req, res, next) {
    try {
        const { userId } = req;

        let user = await User.findById(userId);

        let cartItems = await user.populate('cart.items.productId').execPopulate()

        res.status(200).json({
            cart: cartItems.cart
        })

    } catch (error) {
        next(error)
    }
}

export default getCart