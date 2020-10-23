const productModel = require("../models/product")

module.exports.newProduct = async function(req,res){

    var productId = req.body.productId
    var productName = req.body.productName
    var productImage = req.body.productImage
    var price = req.body.price
    var size = req.body.size
    var quantity = req.body.quantity
    var flex = req.body.flex
   

    try {
        
        let _product = new productModel({

        "productId" : req.body.productId,
        "productName" : req.body.productName,
        "productImage" : req.body.productImage,
        "price" : req.body.price,
        "size" : req.body.size,
        "quantity" : req.body.quantity,
        "flex" : req.body.flex,
       
    })
    
    let data = await _product.save()
    res.send(data) 
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
