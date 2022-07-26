require('dotenv').config()
const mysql = require("mysql");

module.exports = {
 poolReq: mysql.createPool({
    connectionLimit: 100,
    waitForConnections: true,
    queueLimit: 0,
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    debug: false,
    wait_timeout: 28800,
    connect_timeout: 10
})
}
