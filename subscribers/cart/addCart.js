import { default as User } from "../../models/userModel.js";
import { DataBase } from "../../utils/errors.js";

async function Cart(req, res, next) {
    try {
        const  productId  = req.params.productId;
        const { userId } = req
       
        let user = await User.findById(userId);
        let addProduct = user.addToCart(productId);
        if (!addProduct) {
           throw new DataBase(400, 'this process was not added to cart')
        }

        res.status(201).json({
            message: "this product has been added to cart",
            cart: user.cart
        })
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

export default Cart