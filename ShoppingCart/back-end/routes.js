const express = require('express');
const router = express.Router();
const productRouterService = require('./controllers/ProductController');
router.get('/', (req, res) => {
    res.send("<h1>Home</h1>");
});

router.get('/products', require('./controllers/ProductController'));
module.exports = router;