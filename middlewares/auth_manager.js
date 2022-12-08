const jwt = require("jsonwebtoken");
const pool = require('../config/database')
var config = require("../config/config");
let axios = require("axios");
var crypto = require('crypto');


authManagerUser = function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const is_deleted = 0;
    var login_attempt_hashed = crypto.createHash('sha512').update(password).digest('hex');
    console.log(username, login_attempt_hashed);
    // console.log("username, login_attempt_hashed");

    if (
        typeof username == "undefined" ||
        username == "" ||
        typeof password == "undefined" ||
        password == "undefined"
    ) {
        return res.json({
            code: 204,
            message: "Please send username and password"
        });
    } else {
        pool.poolReq.query(
            'SELECT u.user_email, u.id,u.company_id FROM managers u ' +
            'WHERE u.user_email = "' + username + '" AND BINARY u.password="' +
            login_attempt_hashed + '" AND u.is_deleted="' + is_deleted + '"',
            function (error, results, fields) {
                if (error) {
                    return res.json({
                        code: 400,
                        message: "error occured",
                        error: error
                    });
                } else {
                    console.log(results)
                    if (results.length > 0) {
                        const username = results[0]["user_email"];
                        let managerId = results[0]["id"];
                        const companyId = results[0]["company_id"];
                        const user = {
                            username: username,
                            userId: managerId
                        };
                        let arrProducts = "";
                        let isTokenInserted = "";
                        jwt.sign(
                            { user },
                            /*  "secretkey", */
                            /* "qweqweqwe", */
                            config.secret,
                            { expiresIn: "300000s" },
                            async (err, token) => {
                                if (token !== "") {
                                    return res.json({
                                        status: 200,
                                        message: "success",
                                        resultSet: {
                                            token,
                                            managerId,
                                            username,
                                            companyId
                                        }
                                    });
                                }
                            }
                        );
                    } else {
                        return res.json({
                            code: 204,
                            message: "Email and password does not match"
                        });
                    }
                }
            }
        );
    }
    // connection.end();
    //pool.end();
};


module.exports = {
    authManagerUser
};
