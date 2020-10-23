const express =require('express')
const orderRouter= express.Router()
const  newO =require('../controllers/newOrder')
const  viewO =require('../controllers/viewOrders')



orderRouter.get("/view",viewO.viewOrders)

orderRouter.post("/add",newO.newOrder)

//api to remove a product from cart [input :]
//orderRouter.post("delete",cart.removeProduct)

module.exports=orderRouter
