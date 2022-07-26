var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var User = require("../model/user");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var config = require("../config/config");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/register", (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);
  console.log(hashedPassword);
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    },
    (err, user) => {
      if (err) return res.status(500).send("Registration failed");

      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400
      });

      res.status(200).send({ auth: true, token: token });
    }
  );
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send("Internal server error");
    if (!user) return res.status(404).send("User not found");

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 });

    res.status(200).send({ auth: true, token: token });
  });
});

module.exports = router;







// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QiLCJpYXQiOjE2MzE3NzQ1NzUsImV4cCI6MTYzMTg2MDk3NX0.yK_AifJdZQDGq4s - 7bKMmdGWRXzYyNVPjbeLfZ3WM0c

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImoiLCJpYXQiOjE2MzE3NzQ1NjgsImV4cCI6MTYzMTg2MDk2OH0.NRPkUgEGZv9Ktr4 - mm6LShsKm80VRZWiZ0tG5u2PEzM




