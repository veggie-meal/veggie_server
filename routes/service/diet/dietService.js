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
            food, vegan_type, id, wrt_time
        ) VALUES(
            ?, ?, ?, ?
        )
    `;
    
    const queryData = [data.food, data.vegan_type, data.userId, data.wrt_time];

    QueryHelper.query_send(query, queryData, next);
};

exports.addDietLog = (data, next) =>{
    const query = `
        INSERT INTO diet_hist_log (
            id, wrt_time, content, food_list
        ) VALUES(
            ?, ?, ?, ?
        )
    `;
    
    const queryData = [data.userId, data.wrt_time, data.content, data.food_list];

    QueryHelper.query_send(query, queryData, next);
};

exports.updateDietHist = (data, next) =>{
    const query = `
        UPDATE diet_hist 
        SET food = ?
            , vegan_type = ?
        WHERE id = ?
            and DATE(wrt_time) = ?
            and hist_seq = ?
    `;
    
    const queryData = [data.food, data.vegan_type, data.userId, data.wrt_time, data.hist_seq];

    QueryHelper.query_send(query, queryData, next);
};

exports.updateDietLog = (data, next) =>{
    const query = `
        UPDATE diet_hist_log
        SET content = ?
            , food_list = ?
        WHERE id = ?
            and log_seq = ?
    `;
    
    const queryData = [data.content, data.food_list, data.userId, data.log_seq];

    QueryHelper.query_send(query, queryData, next);
};
