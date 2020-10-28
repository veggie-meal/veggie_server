var express = require('express');
var router = express.Router();

const dietController = require("../../controller/diet/diet");


router.post('/dietList', dietController.dietList);
router.post('/dietLog', dietController.dietLog);

router.post('/addDiet', dietController.addDiet);

module.exports = router;
