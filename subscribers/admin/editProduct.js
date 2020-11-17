import Product from "../../models/productModel.js";
import { DataBase } from "../../utils/errors.js";
import { authorizedUser } from "../../utils/helpers.js";

async function editProduct(req, res, next) {
    try {
        const { _id } = req.params;
        const { name, price, image, description } = req.body;

        const productToEdit = await Product.findById({ _id });

        if (!productToEdit) {
            throw new DataBase(404, "product not found");
        } else {
            await authorizedUser(req.userId, productToEdit.createdBy);
            productToEdit.name = name;
            productToEdit.price = price;
            productToEdit.image = image;
            productToEdit.description = description;

            const editedProduct = await productToEdit.save();

            res.status(201).json({
                message: "this product has been edited",
                product: editedProduct,
            });
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 405;
            error.message = "this id is too short or too long";
        }
        next(error);
    }
}

export default editProduct;
