var express = require('express');
var router = express.Router();
var sample = require("../controller/sample");
var user = require("./user");

/* GET home page. */
router.get('/', sample.start);

router.use('/user', user);

module.exports = router;
