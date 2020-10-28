
const db = require("../../../loader/db");
const mysql = require("mysql");

let resultJson = {
    result : false
    , data : []
};

exports.query_send = (query, queryData, next) => {
    db((conn)=>{
        conn.query(query, queryData, function(err, result){
                conn.release();
                if(err){
                    console.log(err);
                    resultJson.data = err;
                } else {
                    resultJson.result = true;
                    resultJson.data = result;
                }
                
                next(resultJson);
        });
    });
}