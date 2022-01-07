var Todo=require('../models/todo');

module.exports.delete=function(req,res){

    let id=req.query.id;

    Todo.findByIdAndDelete(id,function(err){
 
      if(err){
 
         console.log("error ocurred while deleating the task ");
      }
 
      return res.redirect('/');
    });

};