const Order = require('../models/Order');
var ObjectId = require("mongodb").ObjectID;

exports.getAllOrders = ( req , res , next ) => {

    const OrderQuery = Order.find();
    OrderQuery.sort({ orderdate : -1 });
    OrderQuery.exec()
      .then(productArr => {
        if (productArr.length > 0) {
          res
            .status(200)
            .send({
              data: productArr,
              message: "Success",
              totalRecords: productArr.length
            });
        } else {
          res
            .status(404)
            .send({ data: [], message: "No products found", totalRecords: 0 });
        }
      })
      .catch(err => {
        console.log("Error", err);
        res
          .status(500)
          .send({ data: [], message: "Server Error", totalRecords: 0 });
      });
}

exports.getAllUserOrders = ( req,res, next ) => {

}

exports.createOrder = ( req , res ) => {
//   let orderno = req.body.orderno;
//   let orderdate = req.body.orderno;
//   let ordertotal = req.body.orderno;
//   let billingaddress= req.body.orderno;
//   let shippingaddress = req.body.orderno;
//   let user = req.body.orderno;
//   let lineitems = req.body.lineitems;

  let orderno = '1001';
  let orderdate = new Date();
  let ordertotal = 1000;
  let billingaddress = {};
  let shippingaddress = {};
  let user = ObjectId("5da0a9bce45fa25208c99229");
  let lineitems = [
    {
      productid: "5d7e445f07fa4d236d7c20bd",
      qty: 2,
      price: 100,
      total: 2000
    },
    {
      productid: ObjectId("5da0a9bce45fa25208c99229"),
      qty: 3,
      price: 200,
      total: 4000
    }
  ];

  const order = Order({
    orderno , orderdate , ordertotal , billingaddress, shippingaddress , user , lineitems
  });
  order
    .save()
    .then(orderDetails => {
      res
        .status(200)
        .send({ data: orderDetails, message: "Success", totalRecords: 1 });
    })
    .catch(err => {
      res
        .status(500)
        .send({ data: [], message: "Bad Request", totalRecords: 0 });
    });
}