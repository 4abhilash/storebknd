const { Mongoose } = require('mongoose')
const orderModel =require('../models/order')

module.exports.newOrder = async function(req,res){

    try {

        let _order =new orderModel({
            "productId":req.body.productId,
                "name":req.body.customerName,
                "address":req.body.customerAddress,
                "contactInfo":req.body.phoneNo
            
        })
        let data =await _order.save()
        res.send(data)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}