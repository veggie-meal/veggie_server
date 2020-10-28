const mysql = require('mysql');
const config = require('../config/index');

function makeConfig(){
    var json_config = new Object();

    /*
        {
            "host": "<host>",
            "user": "<username>",
            "password": "<password>",
            "database": "<database>",
            "connectionLimit": 10
        }
    */

    json_config.host = config.DB.HOST;
    json_config.user = config.DB.USER;
    json_config.password = config.DB.PASSWORD;
    json_config.database = config.DB.DATABASE;
    json_config.connectionLimit = 30;
    
    return json_config;
}
console.log(makeConfig())
let pool = mysql.createPool(makeConfig());

function getdb(callback) {
  pool.getConnection(function (err, conn) {
    if(!err) {
        callback(conn);
    }
  });
}

// function getdb(){
//     console.log(config.DB.TYPE)
// }

module.exports = getdb;