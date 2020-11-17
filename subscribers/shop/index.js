import getProductByCategory from './getCategory.js'
import getAllProduct  from './getProduct.js'
import getProductById from './productDetail.js'

const home = (req, res) => {
    res.status(200).json({
        message : 'welcome to explore No 1 shopping site'
    })
}

export {
    home,
    getAllProduct,
    getProductById,
    getProductByCategory
}