
const schedule = require('node-schedule');
const ScheduleService = require("../../service/scheduler/scheduler");

exports.runScheduler = function () {

    // 매 주간
    (async function () {

        console.log('Scheduler Weekly Move Start !');

        //veggie_획득 스케쥴러 
        schedule.scheduleJob('0 28 1 * * *', () => {

            console.log('vegan_role start');

            
        //     ScheduleService.selectVeganRole((result,veganRoleList)=>{

        //         if(result)
        //         for(let i = 0 ; i < veganRoleList.length ; i++){

        //             ScheduleService.getUserByVeganCount(veganRoleList[i].vegan_type, veganRoleList[i].veggie_cnt, (result, idList) => {

        //                 if(result && idList.length > 0)
        //                 ScheduleService.insertVeggieHist(idList,veganRoleList[i].veggie_id,(r,ra)=>{
        //                     console.log(veganRoleList[i].veggie_name + "의 획득 스케쥴이 완료되었습니다.")
        //                 })
        //         })
        //     }
        //     })
        });

    })();

};