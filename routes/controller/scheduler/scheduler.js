
const schedule = require('node-schedule');

exports.runScheduler = function () {

    // 매 주간
    (function () {

        console.log('Scheduler Weekly Move Start !');

        schedule.scheduleJob('0 0 1 * * 1', () => {

        });

    })();

};