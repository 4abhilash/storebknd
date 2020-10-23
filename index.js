const express = require('express')

const app = express()
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
const product = require('./models/product')
var cors = require('cors')


const orderRouter =require("./routes/orderRouter")
const productRouter = require('./routes/productRouter')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/storebknd')

mongoose.connection.once('open',function(){
    console.log("DB Connection Established")
})

app.listen(5000,function(){
    console.log("EXPRESS RUNNING ON PORT 5000")
})

app.use("/api/v1/order",orderRouter)
app.use("/api/v1/product", productRouter)
