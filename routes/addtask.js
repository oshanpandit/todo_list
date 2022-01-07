const express=require('express');

const router=express.Router();

router.use(express.urlencoded());

const addController=require('../controllers/addTask_controller');

router.post('/',addController.add);

module.exports=router;