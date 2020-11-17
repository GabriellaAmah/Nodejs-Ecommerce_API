// eslint-disable-next-line node/no-extraneous-import
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    cart: {
        items: [{
            productId: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number
        }]
    }
}, { timestamps: true });

userSchema.methods.addToCart = function(productId){
    
    let checkIfProductExist = this.cart.items.findIndex((items) => {
        return items.productId.toString() == productId.toString()
    });

    let cartItems = [ ...this.cart.items ]


    if (checkIfProductExist < 0) {
        cartItems.push({ productId: productId, quantity: 1})
    } else {
        this.cart.items[checkIfProductExist].quantity += 1;
    }

    this.cart.items = cartItems;

    return this.save();
}

userSchema.methods.deleteCartItem = function(productId){

    let undeletedItems = this.cart.items.filter((cartItems) => {
      return  cartItems.productId.toString() !== productId.toString();
    })

    this.cart.items = undeletedItems;

    return this.save()
}

const User = mongoose.model('User', userSchema);

export default User

