const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var indexRouter = require('./routes/index')
const productRouter = require('./routes/product');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/', indexRouter);
app.use('/product', productRouter);

const server = http.createServer(app);

mongoose.connect( "mongodb+srv://aksharadmin:aksharadmin@node-app-cluster-x1adf.mongodb.net/shop?retryWrites=true&w=majority" )
.then( resp => {
    app.listen(4000);
}).catch(error => {
    console.log("Error connecting using Mongoose" , error);
})