const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/UserController");

userRouter.get("/login", userController.AuthenticateUser);
module.exports = userRouter;
