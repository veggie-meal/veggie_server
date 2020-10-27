// by YUN



const request = require("request");
const qs = require("querystring");
const config = require("../../../config/index");



function kakaoMe (userAT, next) {
    let host = "https://kapi.kakao.com";


    let api_opt = {
        url :host + "/v2/user/me",
        headers:{
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Authorization':'Bearer {' +  userAT + '}'
    }
    };

    request.get(api_opt, (err, res,req)=>{
            if(err)
            next(null,err);

            if(req)
            next(true,req);
    })
}

module.exports = kakaoMe