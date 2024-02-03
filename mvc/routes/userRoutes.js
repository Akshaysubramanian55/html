const express= require('express');
const router =express.Router();
const userController=require('../controller/userController');
const checkLogin=require('../utils/checklogin').checkLogin;


router.post('/user',userController.createUser);
router.get('/user',checkLogin,userController.getUserData);
router.put('/editData',userController.updateUser);
router.delete('/deleteData',userController.deleteUser)

module.exports=router;