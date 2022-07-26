var jwt = require("jsonwebtoken");
var config = require("../config/config");

module.exports = (req, res, next) => {
  console.log(req.headers["authorization"])
  if (!req.headers["authorization"]) {
    //  return res.status(401).send("Unauthorized");
    next();

  } else {
    jwt.verify(req.headers["authorization"], config.secret, (err, decoded) => {
      if (err) {
        res.status(403).send("NOt authorizedz");
      } else {
        next();
      }
    });
    // next();
  }
};


// hatagalevikram@gmail.com
// wCD9xpfy