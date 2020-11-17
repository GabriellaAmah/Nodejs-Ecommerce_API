import Product from '../../models/productModel.js';
import { DataBase } from '../../utils/errors.js'

async function getAllProduct(req, res, next) {
    try {
       
        const allProducts = await Product.find()
        if (!allProducts) {
            throw new DataBase(500, 'products could not be found');
        }
        return res.status(200).json({
            message : "products found",
            product: allProducts
        })
    } catch (error) {
        next(error)
    }
}

export default getAllProduct