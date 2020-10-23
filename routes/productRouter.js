const express = require('express');
//const over = require("../models/over");
//const overModel = require("../models/over");

const productRouter = express.Router();
const newP = require('../controllers/newProduct');
productRouter.post('/new',newP.newProduct);
const show = require('../controllers/showDb');
productRouter.get('/show',show.showDb);

module.exports = productRouter