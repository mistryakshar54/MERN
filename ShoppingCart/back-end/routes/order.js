const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/OrderController');

orderRouter.get('/' ,orderController.getAllOrders);
orderRouter.get("/user/:userId", orderController.getAllUserOrders);
orderRouter.get("/:orderId", orderController.getOrderDetails);
orderRouter.post("/", orderController.createOrder);
orderRouter.put("/:orderId", orderController.getAllUserOrders);
orderRouter.delete("/:orderId", orderController.deleteOrder);

module.exports = orderRouter;