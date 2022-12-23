const mysql = require("mysql")
require('dotenv').config()
const connection = mysql.createConnection({
    host: process.env.HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
})

connection.connect((err)=>{
    if(!err){
     return console.log("DB qoshulub")
    }
    console.log("xeta")
})

module.exports = connection