const { Mongoose } = require('mongoose')
const orderModel =require('../models/order')


module.exports.viewOrders =async function(req,res){
    try {
        var result=await orderModel.find().populate('cards')
        res.send(result)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
        
    }