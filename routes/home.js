const express=require('express');

const router=express.Router();

router.use(express.static('assets'));

const homepageController=require('../controllers/homePage_controller');

router.get('/',homepageController.home);

router.use('/add-task',require('./addtask'));

router.use('/delete-task',require('./deleteTask'));

module.exports=router;