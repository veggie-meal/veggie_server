const kakao = require("../../service/user/kakao");
const db =require("../../../loader/db");
const userService = require("../../service/user/userService");

class User {


    login(req,res){

        console.log("reach")

        let data = req.body;

    


        kakao(data.userAT,(result, resultObj)=>{
            if(!result){

                console.log(resultObj);
            return res.json({
                result : false,
                code : -1
            });
        }

           userService.findUserId(data.userId,(result,userObj)=>{
               if(!result)
               return res.json({
                   result : false,
                   code : 0
               });

               if(userObj.length > 0 )
               return res.json({
                   result : true,
                   code : 1
               });
               else if(userObj.length == 0)
               return res.json({
                   result : true,
                   code : 2
               })
           })
            
        })
    };


}

module.exports = new User();