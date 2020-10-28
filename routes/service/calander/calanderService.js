


const db = require("../../../loader/db");
const mysql = require("mysql");
const escape = mysql.escape;

exports.getCalander = (userId,startDate,endDate,next) =>{
    db((conn)=>{

        conn.query(" "+
           " SELECT * "+
           " FROM  diet_hist" +
           " WHERE id = "+escape(userId)+
           "    AND DATE("+escape(startDate)+ ") <= wrt_time AND wrt_time <  DATE(DATE_ADD("+escape(endDate)+", INTERVAL 1 DAY)) "+
           " ORDER BY wrt_time ASC "
           
        
            ,(err, result)=>{
               if(err)
               next(null,null);

               next(true, result);
               conn.release();
           })
    })
};



