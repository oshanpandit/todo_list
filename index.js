// const { urlencoded } = require('express');
const express=require('express');

const app=express();

const port=8000;

const connectDb=require('./config/mongoose');

connectDb();


app.use(express.urlencoded());

app.use(express.static('./assets'));

app.use('/',require('./routes/home'));

app.set('view engine','ejs');

app.set('views','./views');




app.listen(port,function(err){
 
    if(err){


        console.log(`Error while running the server ${err}`);

        return;
    }

    console.log(`The server is up and running on port : ${port}`);

    return;
});

console.log("hello");