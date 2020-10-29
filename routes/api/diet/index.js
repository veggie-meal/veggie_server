var express = require('express');
var router = express.Router();

const dietController = require("../../controller/diet/diet");


router.post('/dietList', dietController.dietList);
router.post('/dietLog', dietController.dietLog);

router.post('/addDiet', dietController.addDiet);
router.post('/addDietLog', dietController.addDietLog);

router.post('/modifyDiet', dietController.modifyDiet);
router.post('/modifyDietLog', dietController.modifyDietLog);

module.exports = router;
