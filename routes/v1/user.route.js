const express = require('express');
const userController = require('../../middlewares/user.controller');
const router = express.Router();

router.route('/random')
    .get(userController.randomUser);

router.route('/all')
    .get(userController.allUser);



module.exports = router;