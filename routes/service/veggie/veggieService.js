

const db = require("../../../loader/db");
const mysql = require("mysql");
const escape = mysql.escape;

exports.getMyVeggie = (userId,next) =>{
    db((conn)=>{

        conn.query(" "+
           " SELECT t.* , IF(j.veggie_id IS NULL, 0, 1) AS is_my, j.wrt_time "+
           " FROM  ( "+
           "    SELECT * "+
           "    FROM veggie " +
           " ) t "+
           " LEFT JOIN veggie_hist j ON j.veggie_id = t.veggie_id AND j.id = "+escape(userId)
           
        
            ,(err, result)=>{
               if(err)
               next(null,null);

               next(true, result);
               conn.release();
           })
    })
};



