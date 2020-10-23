  
var mongoose = require('mongoose')

const {Schema}=mongoose
const orderSchema=new Schema(

    {   
        productId:[{type:mongoose.Schema.Types.ObjectId,
        ref:'cards'}],
        name:{type:String},
        address:{type:String},
        contactInfo:{type:Number}
        
               
    }
)
module.exports=mongoose.model("order",orderSchema)