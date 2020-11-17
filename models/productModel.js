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
        required : true
    },

    image : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    createdBy: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
}, {timestamps : true})

const Product = mongoose.model('Product', productSchema);

export default Product