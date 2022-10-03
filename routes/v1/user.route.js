const express = require('express');
const userController = require('../../controllers/user.controller');
const router = express.Router();

router.route('/random')
    /**
     * @api {get} /user/random - random user provided
     * @apiDescription Get random user every single call
     * @apiPermission anyone
     * 
     * @apiParam
     * 
     * @apiHeader no need token
     * 
     * @apiSuccess {object{}} a single user
     * 
     * @apiError 
     * @apiError  
    */
    .get(userController.randomUser);

router.route('/all')
    /**
     * @api {get} /user/all - all user
     * @apiDescription Get all users. Also can get limited user by the limit query. example - all?limit=5
     * @apiPermission anyone
     * 
     * @apiParam
     * 
     * @apiHeader no need token
     * 
     * @apiSuccess {Object[]} all users
     * 
     * @apiError
     * @apiError
    
    */
    .get(userController.allUser);

router.route('/save')
    /**
     * @api {Post} /user/save - save an user
     * @apiDescription add an user at the end of old users
     * @apiPermission admin
     * 
     * @apiHeader no need token
     * 
     * @apiParam
     * @apiParam
     * 
     * @apiSuccess {object{}} save an user
     * 
     * @apiError
     * @apiError
    
    */
    .post(userController.saveUser);

router.route('/update')
    /**
     * @api {patch} /user/update - update an user
     * @apiDescription update an user info
     * @apiPermission admin
     * 
     * @apiHeader no need token
     * 
     * @apiParam {Number{1-}}
     * @apiParam
     * 
     * @apiSuccess {object{}} update an user
     * 
     * @apiError
     * @apiError
    
    */
    .patch(userController.updateUser);

router.route('/delete/:id')
    /**
     * @api {delete} /user/delete/id - delete an user
     * @apiDescription delete an user
     * @apiPermission admin
     * 
     * @apiHeader no need token
     * 
     * @apiParam {Number{1-}}
     * @apiParam
     * 
     * @apiSuccess {object{}} delete an user
     * 
     * @apiError
     * @apiError
    
    */
    .delete(userController.deleteUser);

router.route('/bulk-update')
    /**
     * @api {patch} /user/bulk-update - update multiple user
     * @apiDescription update multiple user and get as array through req.body
     * @apiPermission admin
     * 
     * @apiHeader no need token
     * 
     * @apiParam 
     * @apiParam
     * 
     * @apiSuccess {object[]} update multiple users
     * 
     * @apiError
     * @apiError
    
    */
    .patch(userController.bulkUpdate);



module.exports = router;