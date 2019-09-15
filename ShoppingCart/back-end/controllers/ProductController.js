const Product = require('../models/Product');
var ObjectId = require("mongodb").ObjectID;
exports.getAllProducts = (req , res , next) =>{
    Product.find()
    .then((productArr => {
        if (productArr.length > 0)
        {
            res.status(200).send( { data : productArr , message : "Success", totalRecords : productArr.length });
        }
        else
        {
            res.status(404).send( { data : [] , message : "No products found", totalRecords : 0 });

        }
    }))
    .catch( err => {
        console.log("Error" , err);
        res.status(500).send( { data : [] , message : "Server Error", totalRecords : 0 });
    });
    
};


exports.createNewProduct = ( req , res ) => {
       let id = "12121";
       let name = "Laptop";
       let price = 50000;
       let currency = "INR";
       let description = "Good Laptop";
       let rating = 3;
       let SKU= new Date().getTime()
    const prod = new Product({
      name,
      price,
      currency,
      description,
      rating,
      SKU ,
      code: name+'-'+ SKU.toString().substr(10),
      images: [],
      isActive: true
    });
    prod.save()
    .then( productDetails => {
        res.status(200).send( { data : productDetails , message : "Success", totalRecords : 1 });
    }).catch( err => {
        res.status(500).send( { data : [] , message : "Bad Request", totalRecords : 0 });
    });
}

exports.getProductDetails = (req, res, next) => {
    let productId = req.params.prodId;
    Product.findById( productId ).then( productDetails => {
        if (!productDetails || productDetails == null) {
            res.status(400).send( { data : [] , message : "No such product", totalRecords : 0 });
        }
        else {
            res.status(200).send( { data : productDetails , message : "Success", totalRecords : 1 });
        }
    }).catch( err => {
        res.status(500).send( { data : [] , message : "Bad Request", totalRecords : 0 });
    });

};

exports.deleteProduct = ( req,res ) => {
    let productIds = req.body.prodIds;
    let deletePromise;
    if(productIds.length === 1){
       deletePromise = Product.findOne( {_id : productIds[0]} ).remove().exec();
    }
    else{
       deletePromise = Product.deleteMany( { _id : { $in : productIds } } );
    }
    deletePromise.then(deleteResponse => {
    if (!deleteResponse || deleteResponse == null) {
        res.status(404).send({ message: "No such product" });
    } else if (deleteResponse.deletedCount > 0) {
        res
        .status(200)
        .send({ data: [], message: "Success", totalRecords: deleteResponse.deletedCount });
    } else if (deleteResponse.deletedCount === 0) {
        res
        .status(404)
        .send({
            data: [],
            message: "Record doesnot exist",
            totalRecords: 0
        });
    } else {
        res
        .status(500)
        .send({
            data: [],
            message: "Could not perform the operation",
            totalRecords: 0
        });
    }
    })
    .catch(err => {
    res.status(400).send({ message: "Bad Request"+err.toString() });
    });
}

exports.updateProductData = ( req, res ) => {
let productId = req.pa;
Product.deleteSingleProduct(productId)
  .then(deleteResponse => {
    if (!deleteResponse || deleteResponse == null) {
      res.status(404).send({ message: "No such product" });
    } else if (deleteResponse.deletedCount > 0) {
      res.status(200).send({ data: [], message: "Success", totalRecords: 1 });
    } else if (deleteResponse.deletedCount === 0) {
      res
        .status(404)
        .send({ data: [], message: "Record doesnot exist", totalRecords: 0 });
    } else {
      res
        .status(500)
        .send({
          data: [],
          message: "Could not perform the operation",
          totalRecords: 0
        });
    }
  })
  .catch(err => {
    res.status(400).send({ message: "Bad Request" });
  });
}
