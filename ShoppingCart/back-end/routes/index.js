const express = require('express');
const indexRouter = express.Router();
indexRouter.get('/' , (req,res) => {
    res.send("Came to index")
});

module.exports = indexRouter;