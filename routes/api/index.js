var express = require('express');
var router = express.Router();
var sample = require("../controller/sample");

var user = require("./user");
var diet = require("./diet");
var calander = require("./calander");
var veggie =require("./veggie");

/* GET home page. */
router.get('/', sample.start);

router.use('/user', user);
router.use("/calander",calander);
router.use("/veggie",veggie);
router.use("/diet",diet);

module.exports = router;
