const jwt = require('jsonwebtoken');

module.exports = function ( req , res, next ) {
    if (req.headers["authorization"]) {
      const token = req.headers["authorization"];
        try {
            const decodedToken = jwt.verify(token, "samplesecret"); 
            req.userData = decodedToken;
            next();
        } catch (ex) {
            res.status(400).send({ message : "Invalid Token!" });
        }
      } else {
      res.status(401).send({ message: "Bad request!" });
    }
}