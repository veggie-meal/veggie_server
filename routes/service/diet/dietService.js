const db = require("../../../loader/db");
const QueryHelper = require("../module/QueryHelper");

exports.findDietHist = (userId, wrt_time, next) =>{
    const query = `
        SELECT * FROM diet_hist
        WHERE id = ? 
        and DATE(wrt_time) = ?
    `;
    const queryData = [userId, wrt_time];

    QueryHelper.query_send(query, queryData, next);
};

exports.findDietLog = (userId, wrt_time, next) =>{
    const query = `
        SELECT * FROM diet_hist_log
        WHERE id = ? 
        and DATE(wrt_time) = ?
    `;
    const queryData = [userId, wrt_time];

    QueryHelper.query_send(query, queryData, next);
};

exports.addDietHist = (data, next) =>{
    const query = `
        INSERT INTO diet_hist (
            food, vegan_type, id
        ) VALUES(
            ?, ?, ?
        )
    `;
    
    const queryData = [data.food, data.vegan_type, data.userId];

    QueryHelper.query_send(query, queryData, next);
};
