


const db = require("../../../loader/db");
const mysql = require("mysql");
const QueryHelper = require("../module/QueryHelper");

const escape = mysql.escape;

exports.findUserId = (userId,next) =>{
    db((conn)=>{

        conn.query(" "+
           " SELECT * "+
           " FROM user " +
           " WHERE id = "+escape(userId),(err, result)=>{
               if(err)
               next(null,null);

               next(true, result);
               conn.release();
           })
    })
};

exports.addUser = (data, next) =>{
    const query = `
        INSERT INTO user (
            id, pass_word, user_name, vegan_type
        ) VALUES(
            ?, ?, ?, ?
        )
    `;
    console.log(data);
    const queryData = [data.userId, data.pass_word, data.user_name, data.vegan_type];

    QueryHelper.query_send(query, queryData, next);
};


exports.updateUserGoal = (data, next) =>{
    const query = `
        UPDATE user 
        SET vegan_type = ?
        WHERE id = ?
    `;
    console.log(data);
    const queryData = [data.vegan_type, data.userId];

    QueryHelper.query_send(query, queryData, next);
};



