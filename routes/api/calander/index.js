var express = require('express');
var router = express.Router();

const calanderController = require("../../controller/calander/calander");


router.post('/list',calanderController.calander);

module.exports = router;
