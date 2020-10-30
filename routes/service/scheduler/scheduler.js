

const db = require("../../../loader/db");
const mysql = require("mysql");
const QueryHelper = require("../module/QueryHelper");

const escape = mysql.escape;

exports.getUserByVeganCount = (veganType,count,next) =>{
    db((conn)=>{

        conn.query(" "+
           " SELECT id " +
           " FROM ( "+
           "    SELECT COUNT(1) AS count, id "+
           "    FROM diet_hist " +
           "    WHERE vegan_type = " +escape(veganType) +
           "    GROUP BY id " + 
           " ) t " +
           " WHERE t.count BETWEEN " + escape(count) + " AND " +escape(count + 4)
           
           
           ,(err, result)=>{
               if(err)
               next(null,null);

               next(true, result);
               conn.release();
           })
    })
};


exports.selectVeganRole = (next) =>{
    db((conn)=>{

        conn.query(" "+
           " SELECT * " +
           " FROM veggie_role "
           
           ,(err, result)=>{
               if(err)
               next(null,null);

               next(true, result);
               conn.release();
           })
    })
};

exports.insertVeggieHist = (idList,veggie_id, next) =>{

    let insertQuery = idList.map(result => "("+escape(result.id)+", NOW(), "+escape(veggie_id) +" )")
    db((conn)=>{

        conn.query(" "+
           " INSERT IGNORE INTO veggie_hist  " +
           " (id, wrt_time, veggie_id) " +
           " VALUES " + insertQuery.toString()

           
           ,(err, result)=>{
               if(err)
               next(null,null);

               next(true, result);
               conn.release();
           })
    })
};

