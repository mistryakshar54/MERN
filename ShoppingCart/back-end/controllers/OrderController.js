const Order = require('../models/Order');
var ObjectId = require("mongodb").ObjectID;
const ITEMS_PER_PAGE = 2;
exports.getAllOrders = ( req , res , next ) => {
    const page = req.query.page ? req.query.page : 1;
    const OrderQuery = Order.find();
    OrderQuery.sort({ orderdate : -1 });
    OrderQuery.exec()
    OrderQuery.skip( ( page - 1 ) * ITEMS_PER_PAGE )
    OrderQuery.limit(ITEMS_PER_PAGE)
      .then(orderArr => {
        if (orderArr.length > 0) {
          res
            .status(200)
            .send({
              data: orderArr,
              message: "Success",
              totalRecords: orderArr.length
            });
        } else {
          res
            .status(404)
            .send({ data: [], message: "No orders found", totalRecords: 0 });
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
  const userId = req.params.userId;
  const page = req.query.page ? req.query.page : 1;
  if( !userId )
  {
    res
      .status(400)
      .send({ data: [], message: "Bad Request", totalRecords: 0 });
  }
  else
  {
    const OrderQuery = Order.find({ user : userId });
    OrderQuery.sort({ orderdate: -1 });
    OrderQuery.exec();
    OrderQuery.skip((page - 1) * ITEMS_PER_PAGE);
    OrderQuery.limit(ITEMS_PER_PAGE)
      .then(orderArr => {
        if (orderArr.length > 0) {
          res.status(200).send({
            data: orderArr,
            message: "Success",
            totalRecords: orderArr.length
          });
        } else {
          res
            .status(404)
            .send({ data: [], message: "No orders found", totalRecords: 0 });
        }
      })
      .catch(err => {
        console.log("Error", err);
        res
          .status(500)
          .send({ data: [], message: "Server Error", totalRecords: 0 });
      });
  }
    
}

exports.createOrder = ( req , res ) => {
  let orderno = req.body.orderno;
  let orderdate = req.body.orderno;
  let ordertotal = req.body.orderno;
  let billingaddress= req.body.orderno;
  let shippingaddress = req.body.orderno;
  let user = req.body.orderno;
  let lineitems = req.body.lineitems;

  // let orderno = '1004';
  // let orderdate = new Date();
  // let ordertotal = 1000;
  // let billingaddress = {};
  // let shippingaddress = {};
  // let user = ObjectId("5da0a9bce45fa25208c99229");
  // let lineitems = [
  //   {
  //     productid: "5d7e445f07fa4d236d7c20bd",
  //     qty: 2,
  //     price: 100,
  //     total: 2000
  //   },
  //   {
  //     productid: ObjectId("5da0a9bce45fa25208c99229"),
  //     qty: 3,
  //     price: 200,
  //     total: 4000
  //   }
  // ];

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

exports.getOrderDetails = (req, res, next) => {
  let orderId = req.params.orderId;
  Order.findById(orderId)
    .then(orderDetails => {
      if (!orderDetails || orderDetails == null) {
        res
          .status(400)
          .send({ data: [], message: "No such order", totalRecords: 0 });
      } else {
        res
          .status(200)
          .send({ data: orderDetails, message: "Success", totalRecords: 1 });
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ data: [], message: "Bad Request", totalRecords: 0 });
    });
};

exports.deleteOrder = (req, res) => {
  let orderIds = req.params.orderId;
  Order.findOne({ _id: orderIds })
      .remove()
      .exec()
    .then(deleteResponse => {
      if (!deleteResponse || deleteResponse == null) {
        res.status(404).send({ message: "No such Order" });
      } else if (deleteResponse.deletedCount > 0) {
        res
          .status(200)
          .send({
            data: [],
            message: "Success",
            totalRecords: deleteResponse.deletedCount
          });
      } else if (deleteResponse.deletedCount === 0) {
        res.status(404).send({
          data: [],
          message: "Record doesnot exist",
          totalRecords: 0
        });
      } else {
        res.status(500).send({
          data: [],
          message: "Could not perform the operation",
          totalRecords: 0
        });
      }
    })
    .catch(err => {
      res.status(400).send({ message: "Bad Request" + err.toString() });
    });
};