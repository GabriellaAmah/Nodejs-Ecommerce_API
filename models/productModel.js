// eslint-disable-next-line node/no-extraneous-import
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const productSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    price : {
        type : String,
        required : true
    },

    category : {
        type : String,
    },

    image : {
        type : String,
    },

    description : {
        type : String,
    },

    createdBy: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
}, {timestamps : true})

const Product = mongoose.model('Product', productSchema);

export default Product