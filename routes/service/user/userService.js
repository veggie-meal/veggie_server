


const db = require("../../../loader/db");
const mysql = require("mysql");
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


exports.inserUserGoal = (userId,next) =>{
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


