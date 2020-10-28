
const CalanderService = require("../../service/calander/calanderService");

class Calander {


    calander(req,res){
        let data = req.body;

        CalanderService.getCalander(data.userId,data.startDate,data.endDate,(result,calanderList)=>{

            if(!result)
            return res.json({
                result : false,
                code : -1,
                calanderList :[]
            })

            return res.json({
                result : true,
                code : 1,
                calanderList : calanderList
            })
        })
    };


}

module.exports = new Calander();