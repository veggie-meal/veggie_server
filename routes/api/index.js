var express = require('express');
var router = express.Router();
var sample = require("../controller/sample");

/* GET home page. */
router.get('/', sample.start);

module.exports = router;
