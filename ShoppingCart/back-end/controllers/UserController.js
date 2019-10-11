const jwt = require('jsonwebtoken');
const User = require("../models/User");
var ObjectId = require("mongodb").ObjectID;
var bcrypt = require('bcrypt');

exports.authenticateUser = async (req, res, next) => {
    var email = req.body.email;
    var pwd = req.body.pwd;
    User.findOne( {email : email} )
    .then( async userResponse => { 
        let  pwdCheck = await bcrypt.compare( pwd , userResponse.password );
        if( pwdCheck == true )
        {
            let token = userResponse.generateToken();
            res.status(200).send( { data : token , message : "Success", totalRecords : 1 });
        }
        else
        {
            res.status(400).send({ data: [], message: "Invalid Email/Password!", totalRecords: 0 });
        }  
    })
    .catch( userErrorResp  => {
        res.status(400).send({ data: [],userErrorResp, message: "Invalid Email/Password!", totalRecords: 0 });
    });
};

exports.registerUser = async ( req , res ) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = await bcrypt.hash(req.body.password, 10);
    var profileImg = req.body.profileImg;
    var isAdmin = req.body.isAdmin;
    var permissions = req.body.permissions;
    const user = new User({
        name , email , password , profileImg , isAdmin , permissions
    });
    const createUserPromise = user.save();
    createUserPromise.then( async (response) => {
        let token = user.generateToken();
        const userData = { 
            "name" : response.name,
            "email" : response.email,
            "profileImg" : response.profileImg,
            "isAdmin" : response.isAdmin,
            "permissions" : response.permissions
         };
        res.status(200).send( { data : {token , userData} , message : "Success", totalRecords : 1 });
    })
    .catch( error => {
        res.status(500).send({ data: [], message: "Error creating user" ,error, totalRecords: 0 });
    });
}
