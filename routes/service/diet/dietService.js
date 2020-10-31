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
    let arr = (data.food).split(",");
    let vegan_type = "";
    //'MILK','EGG','FISH','CHICKEN','MEAT' >> 채소 빼고 다 안먹음. (VEGAN)
    if(arr.includes("MILK")&&arr.includes("EGG")&&
        arr.includes("FISH")&&arr.includes("CHICKEN")&&arr.includes("MEAT")){
            vegan_type = "VEGAN";
        }

    //'EGG','FISH','CHICKEN','MEAT' >> 채소, 우유 빼고 다 안먹음. (LACTO)
    else if(arr.includes("EGG")&&arr.includes("FISH")&&arr.includes("CHICKEN")&&arr.includes("MEAT")){
        vegan_type = "LACTO";
    }

    //'MILK','FISH','CHICKEN','MEAT' >> 채소, 달걀 빼고 다 안먹음. (OVO)
    else if(arr.includes("MILK")&&arr.includes("FISH")&&arr.includes("CHICKEN")&&arr.includes("MEAT")){
        vegan_type = "OVO";
    }

    //'FISH','CHICKEN','MEAT' >> 채소, 달걀, 우유 빼고 다 안먹음. (LACTO-OVO)
    else if(arr.includes("FISH")&&arr.includes("CHICKEN")&&arr.includes("MEAT")){
        vegan_type = "LACTO-OVO";
    }

    //'CHICKEN','MEAT' >> 채소, 달걀, 우유, 생선 빼고 다 안먹음. (LACTO-OVO)
    else if(arr.includes("CHICKEN")&&arr.includes("MEAT")){
        vegan_type = "PESCO";
    }

    //'MEAT' >> 채소, 달걀, 우유, 생선, 치킨 빼고 다 안먹음. (POLLO)
    else if(arr.includes("MEAT")){
        vegan_type = "POLLO";
    }
    
    else{
        vegan_type = "FLEXITARIAN";
    }

    const query = `
        INSERT INTO diet_hist (
            food, vegan_type, id, wrt_time
        ) VALUES(
            ?, ?, ?, ?
        )
    `;
    
    const queryData = [data.food, vegan_type, data.userId, data.wrt_time];

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
    let arr = (data.food).split(",");
    let vegan_type = "";
    //'MILK','EGG','FISH','CHICKEN','MEAT' >> 채소 빼고 다 안먹음. (VEGAN)
    if(arr.includes("MILK")&&arr.includes("EGG")&&
        arr.includes("FISH")&&arr.includes("CHICKEN")&&arr.includes("MEAT")){
            vegan_type = "VEGAN";
        }

    //'EGG','FISH','CHICKEN','MEAT' >> 채소, 우유 빼고 다 안먹음. (LACTO)
    else if(arr.includes("EGG")&&arr.includes("FISH")&&arr.includes("CHICKEN")&&arr.includes("MEAT")){
        vegan_type = "LACTO";
    }

    //'MILK','FISH','CHICKEN','MEAT' >> 채소, 달걀 빼고 다 안먹음. (OVO)
    else if(arr.includes("MILK")&&arr.includes("FISH")&&arr.includes("CHICKEN")&&arr.includes("MEAT")){
        vegan_type = "OVO";
    }

    //'FISH','CHICKEN','MEAT' >> 채소, 달걀, 우유 빼고 다 안먹음. (LACTO-OVO)
    else if(arr.includes("FISH")&&arr.includes("CHICKEN")&&arr.includes("MEAT")){
        vegan_type = "LACTO-OVO";
    }

    //'CHICKEN','MEAT' >> 채소, 달걀, 우유, 생선 빼고 다 안먹음. (LACTO-OVO)
    else if(arr.includes("CHICKEN")&&arr.includes("MEAT")){
        vegan_type = "PESCO";
    }

    //'MEAT' >> 채소, 달걀, 우유, 생선, 치킨 빼고 다 안먹음. (POLLO)
    else if(arr.includes("MEAT")){
        vegan_type = "POLLO";
    }
    
    else{
        vegan_type = "FLEXITARIAN";
    }

    const query = `
        UPDATE diet_hist 
        SET food = ?
            , vegan_type = ?
        WHERE id = ?
            and DATE(wrt_time) = ?
            and hist_seq = ?
    `;
    
    const queryData = [data.food, vegan_type, data.userId, data.wrt_time, data.hist_seq];

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
