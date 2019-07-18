const http = require('http');
const express = require('express');
const app = express();
var indexRouter = require('./routes/index')
const productRouter = require('./routes/product');

app.use('/', indexRouter);
app.use('/product', productRouter);


const server = http.createServer(app);

server.listen(3001); 