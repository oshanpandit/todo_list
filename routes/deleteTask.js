const express=require('express');

const router=express.Router();

router.use(express.urlencoded());

const deleteController=require('../controllers/deleteTask_controller');

router.get('/',deleteController.delete);

module.exports=router;