var Todo=require('../models/todo');

module.exports.home=function(req,res){
    
Todo.find({},function(err,todoList){

        if(err){

            console.log("Error while showing the tasks");

            return;
        }

        return res.render('home',{


            todo_list:todoList

        });
    });
};


