var express = require('express');
var router = express.Router();

const userController = require("../../controller/user/user");


router.post('/login',userController.login);
router.post('/goal',userController.goal);
router.post('/data',userController.userData);

module.exports = router;
