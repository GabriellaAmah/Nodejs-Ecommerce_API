import Product from '../../models/productModel.js';
import { DataBase } from '../../utils/errors.js'


async function getProductById(req, res, next) {
    try {
        const { _id } = req.params;

        const productWithId = await Product.findById({ _id })

        if(!productWithId){
            throw new DataBase(422, 'product could not be found')
        }

        return res.status(200).json({
            message : "product found",
            product : productWithId
        })
    } catch (error) {
        next(error)
    }
}

export default getProductById