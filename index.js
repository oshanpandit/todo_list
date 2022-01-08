const express=require('express');

const app=express();

const port=8000;

const connectDb=require('./config/mongoose');

connectDb();


app.set('view engine','ejs');

app.set('views','./views');

app.use('/',require('./routes/home'));


app.listen(port,function(err){
 
    if(err){


        console.log(`Error while running the server ${err}`);

        return;
    }

    console.log(`The server is up and running on port : ${port}`);

    return;
});