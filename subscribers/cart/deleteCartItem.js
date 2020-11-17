import { default as User } from "../../models/userModel.js";

async function deleteCartItem(req, res, next) {
    try {
        const { userId } = req;
        const productId = req.params.productId
       
        let user = await User.findById(userId);

       let deletedItem = await user.deleteCartItem(productId);
       if (!deletedItem) {
        let err = new Error('could not add')
        err.statusCode = 422
        throw err
    }

        res.status(201).json({
            message : "this item has been removed from the cart",
            cart : user.cart
        })
    }
    catch(error){
        if(!error.statusCode){
            error.statusCode = 422
        }
        next(error)
    }
}

export default deleteCartItem