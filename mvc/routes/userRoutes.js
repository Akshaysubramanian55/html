const express= require('express');
const router =express.Router();
const userController=require('../controller/userController');


router.post('/submit',userController.createUser);
router.get('/getData',userController.getUserData);
router.put('/editData',userController.updateUser);
router.delete('/deleteData',userController.deleteUser)

module.exports=router;