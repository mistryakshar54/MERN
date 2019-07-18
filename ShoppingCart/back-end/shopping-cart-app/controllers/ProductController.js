const ProductModel = require('../models/Product');

exports.getAllProducts = (req , res , next) =>{
    const productDataArr = ProductModel.fetchAllProducts();
    if (productDataArr.length > 0)
    {
        res.send(productDataArr);
    }
    else
    {
        res.send("No products to display!");
    }
    
};

exports.getProductDetails = (req, res, next) => {
    let productId = req.params.prodId;
    const productDetails = ProductModel.fetchProductDetails( productId );
    if (!productDetails || productDetails == null) {
        res.send("No such product");
    }
    else {
        res.send(productDetails);
    }

};
