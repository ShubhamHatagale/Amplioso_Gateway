var express = require("express");
var app = express();
const cors = require("cors");
app.use(cors());
require('dotenv').config()

const masters = require("./routers/masterService");

//var router = require("./routers/router");
var bodyParser = require("body-parser");
//var db = require("./db");
var jwt = require("jsonwebtoken");
var config = require("./config/config");

const middleware = require("./middlewares/auth");
const middlewaremanager = require("./middlewares/auth_manager");
const middleware_super_admin = require("./middlewares/auth_super_admin");
const PORT = process.env.PORT;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
  next();
});


app.get("/", (req, res) => {
  res.send("Simple API Gateway");
});

app.post("/", (req, res) => {
  res.send("Simple API Gateway from POST");
});
// app.use("/mastersApi", masters);
app.use("/masters", masters);

app.post("/login", (req, res) => {
  // Authenticating user with DB
  if (
    typeof req.body.username === "undefined" ||
    typeof req.body.password === "undefined"
  ) {
    return res.json({
      code: 204,
      message: "Please send username and password"
    });
  }
  middleware.authUser(req, res);
  //const returnedData = login.authUser(req, res);
  //Mock user
});
app.post("/super_admin_login", (req, res) => {
  // Authenticating user with DB
  if (
    typeof req.body.username === "undefined" ||
    typeof req.body.password === "undefined"
  ) {
    return res.json({
      code: 204,
      message: "Please send username and password"
    });
  }
  middleware_super_admin.authSuperUser(req, res);
  //const returnedData = login.authUser(req, res);
  //Mock user
});

app.post("/managerlogin", (req, res) => {
  // Authenticating user with DB
  if (
    typeof req.body.username === "undefined" ||
    typeof req.body.password === "undefined"
  ) {
    return res.json({
      code: 204,
      message: "Please send username and password"
    });
  }
  middlewaremanager.authManagerUser(req, res);
});




app.post("/tokenValidity", async (req, res) => {
  console.log("[Token validity]");
  if (!req.headers["authorization"]) {
    return res.status(401).send("Unauthorized");
  } else {
    console.log("Verifying JWT token...");
    jwt.verify(req.headers["authorization"], config.secret, (err, decoded) => {
      if (err) {
        res.status(403).send("Not authorized");
      } else {
        res.status(200).send("Token is valid");
      }
    });
  }
});

//app.use(router);

app.listen(PORT, console.log(`Simple API Gateway run on localhost:${PORT}`));
