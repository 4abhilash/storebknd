const mongoose = require('mongoose')

const {Schema} = mongoose;

const productSchema = new Schema({
    productId : Number,
    productName : String,
    productImage : String,
    price : String,
    size : [String],
    quantity : Number,
    flex : Number
})

module.exports = mongoose.model("product",productSchema)
