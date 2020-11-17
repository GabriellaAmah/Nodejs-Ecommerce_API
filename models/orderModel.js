// eslint-disable-next-line node/no-extraneous-import
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const orderSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },

    product: [
        {
            productData: { type: Object, required: true },
            quantity: { type: Number, required: true }
        }
    ],

}, { timestamps: true });


const Order = mongoose.model('Order', orderSchema);

export default Order