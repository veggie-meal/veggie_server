var express = require('express');
var router = express.Router();

const veggieController = require("../../controller/veggie/veggie");


router.post('/list',veggieController.veggieList);

module.exports = router;
