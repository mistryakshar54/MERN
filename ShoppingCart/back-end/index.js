const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var indexRouter = require('./routes/index')
const productRouter = require('./routes/product');
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
const bodyParser = require('body-parser');

const session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);
const MONGODB_URL ="mongodb+srv://aksharadmin:aksharadmin@node-app-cluster-x1adf.mongodb.net/shop?retryWrites=true&w=majority";

// var MongoStore = new MongoDBStore({
//   uri : MONGODB_URL,
//   collection:'sessions'
// });


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.set("trust proxy", 1); // trust first proxy
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: false,
//     store:MongoStore
//   })
// );
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use("/user", userRouter);
app.use('/order' , orderRouter);

// const server = http.createServer(app);

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(resp => {
    app.listen(4000);
  })
  .catch(error => {
    console.log("Error connecting using Mongoose", error);
  });