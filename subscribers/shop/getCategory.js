import Product from "../../models/productModel.js";
import { DataBase } from "../../utils/errors.js";

const getProductByCategory = async (req, res, next) => {
    try {
        let { category } = req.query
        let product = await Product.find({ category })
        
        if (!product) {
            throw new DataBase(500, 'this category does not exist');
        }
        return res.status(200).json({
            message: "products found!",
            category: product
        })
    } catch (error) {
        next(error)
    }
}

export default getProductByCategory