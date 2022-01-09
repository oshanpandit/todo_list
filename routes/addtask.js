const express=require('express');

const router=express.Router();

const addController=require('../controllers/addTask_controller');

router.post('/',addController.add);

module.exports=router;