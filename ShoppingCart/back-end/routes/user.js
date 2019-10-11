const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/UserController");
const auth = require('../middlewares/auth');
userRouter.post("/login" ,userController.authenticateUser);
userRouter.post("/register", userController.registerUser);
module.exports = userRouter;
