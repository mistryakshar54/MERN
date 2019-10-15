const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/OrderController');

orderRouter.get('/' , orderController.createOrder);
module.exports = orderRouter;