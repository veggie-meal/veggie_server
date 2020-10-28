
const veggieService = require("../../service/veggie/veggieService");

class Veggie {


    veggieList(req,res){
        let data = req.body;

        veggieService.getMyVeggie(data.userId,(result,veggieList)=>{
            if(!result)
            return res.json({
                result : false,
                code :-1,
                veggieList : []
            });

            return res.json({
                result:true,
                code : 1,
                veggieList : veggieList
            });

        })
    };


}

module.exports = new Veggie();