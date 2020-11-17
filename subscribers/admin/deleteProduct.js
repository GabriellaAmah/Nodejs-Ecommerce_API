import Product from '../../models/productModel.js';
import { authorizedUser } from '../../utils/helpers.js';

async function deleteProduct(req, res, next) {
    try {
        const { _id } = req.params;

        let productToDelete = await Product.findById({ _id });

        await authorizedUser(req.userId, productToDelete.createdBy)

        await Product.findByIdAndDelete({ _id });

        return res.status(200).json({
            message: `this product with id ${_id} has been deleted`
        })
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 405;
            error.message = "this id is too short or too long";
        }
        next(error)
    }
}

export default deleteProduct