const Todo=require('../models/todo');

module.exports.add=function(req,res){

    Todo.create({

        task:req.body.task,

    },function(err,newTask){

        if(err){

            console.log("Error in creating a Task");

            return;
        }


        return res.redirect('/');

    });
};