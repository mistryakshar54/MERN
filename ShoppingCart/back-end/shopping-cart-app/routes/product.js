const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/ProductController');

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:prodId', productController.getProductDetails);

module.exports = productRouter;