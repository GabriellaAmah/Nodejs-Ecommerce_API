import Product from '../../models/productModel.js';
import { DataBase } from '../../utils/errors.js'

async function postProduct(req, res, next) {
    try {
        const { name, price, description, category } = req.body;
        const  image  = req.file.path

        const newProduct = new Product({
            name,
            image,
            price,
            description,
            category,
            createdBy: req.userId
        })

        let savedProduct = await newProduct.save();

        if (!savedProduct) {
            throw new DataBase(400, 'this product could not be saved')
        }

        res.status(201).json({
            message: "this product has been saved",
            product: savedProduct
        })

    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 422
        }
        next(error)
    }
}

export default postProduct