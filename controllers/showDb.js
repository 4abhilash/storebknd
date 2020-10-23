const productModel = require("../models/product")

module.exports.showDb = async function(req,res){
    try {
        var result = await productModel.find();
        res.send(result);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
