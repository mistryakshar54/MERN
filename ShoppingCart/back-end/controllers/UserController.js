const User = require("../models/User");
var ObjectId = require("mongodb").ObjectID;
exports.AuthenticateUser = (req, res, next) => {
    res.cookie("MyCookie" , "Yummy cookie");
    res.status(200).send( { data : "Authentication Successfull!!" } );
};
