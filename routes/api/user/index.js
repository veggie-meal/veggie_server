var express = require('express');
var router = express.Router();

const userController = require("../../controller/user/user");


router.post('/login',userController.login);
router.post('/goal',userController.goal);

module.exports = router;
