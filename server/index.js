import express from 'express'; //framework for creating the routing of applications
import bodyParser from 'body-parser'; // enables us to send post requests
import mongoose from 'mongoose'; //to create models for our posts
import cors from 'cors'; //enables cross-regional requests

import postRoutes from './routes/post.js';

 
/*
I installed kol el fo2 in server directory
also installed nodemon=> so that we dont have to manually reset the server every time we make a change
note: instead of const express=require('express')-> I added a line in package.json ("type": "module",) and ("start": "nodemon index.js") 
w dol in client directory
axios for making api requests
moment library for working with time and date
react-file-base64  used to convert images
redux 
redux-thunk for asynchronous actions using redux
*/ 

const app=express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts',postRoutes); //y3ni every route inside of the post routes is going to start with post


const CONNECTION_URL= 'mongodb+srv://Akwya:AkwyaAwy@cluster0.7jaucfr.mongodb.net/?retryWrites=true&w=majority';
const PORT= process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify', false);    
//apostrophe: `