const kakao = require("../../service/user/kakao");
const db =require("../../../loader/db");
const userService = require("../../service/user/userService");

class User {
  login(req, res) {
    console.log("login");
    let data = req.body;


    kakao(data.userAT, (result, resultObj) => {
      if (!result) {
        console.log(resultObj);
        return res.json({
          result: false,
          code: -1,
        });
      }

      userService.findUserId(data.userId, (result, userObj) => {
        if (!result)
          return res.json({
            result: false,
            code: 0,
          });

        if (userObj.length > 0)
          return res.json({
            result: true,
            code: 1,
          });
        else if (userObj.length == 0)
          return res.json({
            result: true,
            code: 2,
          });
      });
    });
  }

  /*

        목표 입력 함수

    */
  goal(req, res) {
    console.log("update user goal");

    let data = req.body;

    userService.updateUserGoal(data, (resultJson) => {
      console.log(data);
      return res.json(resultJson);
    });
  }

  //유저 정보 들고오기
  userData(req, res) {
    let data = req.body;
    
    userService.findUserId(data.userId, (result, resultObj) => {
      return res.json({
        result: result,
        userData: (result == false ? null : resultObj),
      });
    });
  }
}

module.exports = new User();