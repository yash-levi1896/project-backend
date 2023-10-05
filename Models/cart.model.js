const mongoose=require('mongoose');

const cartSchema=mongoose.Schema({
    image:String,
    name:String,
    price:Array,
    deposit_fee:Number,
    quantity:Number,
    userID:String,
    currprice:Number
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports={CartModel}