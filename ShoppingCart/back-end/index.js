const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var indexRouter = require('./routes/index')
const productRouter = require('./routes/product');
const userRouter = require("./routes/user");
const bodyParser = require('body-parser');
var session = require("express-session");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use("/login", userRouter);

const server = http.createServer(app);

mongoose.connect( "mongodb+srv://aksharadmin:aksharadmin@node-app-cluster-x1adf.mongodb.net/shop?retryWrites=true&w=majority" )
.then( resp => {
    app.listen(4000);
}).catch(error => {
    console.log("Error connecting using Mongoose" , error);
})