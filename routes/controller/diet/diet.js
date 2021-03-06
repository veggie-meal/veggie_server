const db =require("../../../loader/db");
const dietService = require("../../service/diet/dietService");

class Diet {
    /*
    ======================================================
        먹지 않은 음식 List 조회 
    ======================================================
    */
    dietList(req,res){

        console.log("get diet list");

        let data = req.body;
        dietService.findDietHist(data.userId, data.wrt_time, (resultJson)=>{
            return res.json(resultJson);
        });
        
    }

    /*
    ======================================================
        식단 List 조회 
    ======================================================
    */
    dietLog(req,res){
        console.log("get diet Log");

        let data = req.body;
        dietService.findDietLog(data.userId, data.wrt_time, (resultJson)=>{
            return res.json(resultJson);
        });
        
    }

    /*
    ======================================================
        먹지 않은 음식 추가
    ======================================================
    */
    addDiet(req,res){
        console.log("add diet hist");

        let data = req.body;
        dietService.addDietHist(data, (resultJson)=>{
            return res.json(resultJson);
        });
    
    }

    /*
    ======================================================
        식단 추가
    ======================================================
    */
    addDietLog(req,res){
        console.log("add diet hist log");

        let data = req.body;
        dietService.addDietLog(data, (resultJson)=>{
            return res.json(resultJson);
        });

    }

    /*
    ======================================================
        식단 수정
    ======================================================
    */
    modifyDiet(req,res){
        console.log("modify diet hist");

        let data = req.body;
        dietService.updateDietHist(data, (resultJson)=>{
            return res.json(resultJson);
        });

    }

     /*
    ======================================================
        식단 수정
    ======================================================
    */
    modifyDietLog(req,res){
        console.log("modify diet hist log");

        let data = req.body;
        dietService.updateDietLog(data, (resultJson)=>{
            return res.json(resultJson);
        });

    }

}

module.exports = new Diet();