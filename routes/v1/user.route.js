const express = require('express');
const userController = require('../../controllers/user.controller');
const router = express.Router();

router.route('/random')
    .get(userController.randomUser);

router.route('/all')
    .get(userController.allUser);

router.route('/save')
    .post(userController.saveUser);

router.route('/update')
    .patch(userController.updateUser);

router.route('/delete/:id')
    .delete(userController.deleteUser);

router.route('/bulk-update')
    .patch(userController.bulkUpdate);



module.exports = router;