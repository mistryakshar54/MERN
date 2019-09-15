const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ProductSchema = new Schema({
  name: String,
  price: Number,
  currency: String,
  description: String,
  rating: Number,
  SKU: Number,
  code: String,
  images: Array,
  isActive: Boolean
});

module.exports = mongoose.model("Product" , ProductSchema);
// const dbConInstance = require("../utils/database").getDbInstance;
// var ObjectId = require("mongodb").ObjectID;

// const products = [{
//     name : "Laptop",
//     price : 50000,
//     currency : "INR",
//     description : "Good Laptop",
//     rating : 3.5
// }];
// class Product {
//   constructor(id, name, price, currency, description, rating, image) {
//     this.name = name;
//     this.price = price;
//     this.currency = currency;
//     this.description = description;
//     this.rating = rating;
//     this.image = image;
//   }

//   addNewProduct() {
//     products.push(this);
//   }
//   createProduct() {
//     const db = dbConInstance();
//     db.collection("products")
//       .insertOne(this)
//       .then(resp => {
//         console.log("\n\n\n\nResponse From Create One");
//         console.log(resp);
//         console.log(resp.insertedCount);
//         console.log(resp.insertedId);
//         console.log("\n\n\n\nResponse Enda");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   static fetchAllProducts() {
//     const db = dbConInstance();
//     return db
//       .collection("products")
//       .find()
//       .toArray()
//       .then(resp => {
//         return resp;
//       })
//       .catch(err => {
//         console.log(err);
//         return err;
//       });
//   }

//   static fetchProductDetails(productId) {
//     if (!ObjectId.isValid(productId)) {
//       return Promise.reject(new Error("Invalid ID format"));
//     }

//     const db = dbConInstance();
//     return db.collection("products").findOne({ _id: ObjectId(productId) });
//   }

//   static deleteSingleProduct(productId) {
//     if (!ObjectId.isValid(productId)) {
//       return Promise.reject(new Error("Invalid ID format"));
//     }
//     const db = dbConInstance();
//     return db.collection("products").deleteOne({ _id: ObjectId(productId) });
//   }
//   static deleteMultipleProduct(productIds) {
//     productIds.forEach( id => {
//       if (!ObjectId.isValid(id)) {
//         return Promise.reject(new Error("Invalid ID format"));
//       }
//     })
    
//     const db = dbConInstance();
//     return db.collection("products").deleteOne({ _id: ObjectId(productId) });
//   }

//   static updateProductInfo( productData ){
//     if (productData._id && !ObjectId.isValid(productData._id)) {
//       return Promise.reject(new Error("Invalid ID format"));
//     }
//     const db = dbConInstance();
//     return db
//       .collection("products")
//       .updateOne(
//         { _id: ObjectId(productData._id) },
//         { $set: productData.dataToUpdate },
//         { upsert: false }
//       );
//   }
// }

// module.exports = Product;