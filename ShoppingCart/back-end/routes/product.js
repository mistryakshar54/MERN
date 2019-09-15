const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/ProductController');

productRouter.get('/', productController.getAllProducts);
productRouter.get("/add", productController.createNewProduct);
productRouter.get('/:prodId', productController.getProductDetails);
productRouter.delete("/delete", productController.deleteProduct);
productRouter.put("/edit/:prodId", productController.updateProductData);
module.exports = productRouter;