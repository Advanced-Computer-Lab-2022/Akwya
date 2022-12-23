import { config } from 'dotenv';
config();

import express from 'express'; //framework for creating the routing of applications
import bodyParser from 'body-parser'; // enables us to send post requests
import mongoose from 'mongoose'; //to create models for our posts
import cors from 'cors'; //enables cross-regional requests

import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';
import instructorRoutes from './routes/instructor.js';
import traineeRoutes from './routes/trainee.js';

import quizRoutes from './routes/Quiz.js';
//130f8e596e6d93d5007c8208de32ef7726463ee9315c515e1b26c94b81325b72b64e25797f18803579752ec2255c87d782a2c9901d6da8a791adad15e13c3421
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
// require('dotenv').config()
import requireAuth from './Middleware/authMiddleware.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import {createRequire} from "module";
const require=createRequire(import.meta.url)
const stripe = require('stripe')('sk_test_51MIFP2HUXZhuMagYEdCYj0wsG45Ya6iUZ0heOaJjNw7s99MsoWZ7KRRkjPZH2PdyB7JP5sjx2cEKHhZvSXKktkps00cHANVVBh');

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
// stripe('sk_test_51MIFP2HUXZhuMagYEdCYj0wsG45Ya6iUZ0heOaJjNw7s99MsoWZ7KRRkjPZH2PdyB7JP5sjx2cEKHhZvSXKktkps00cHANVVBh');
dotenv.config();

const app = express();






app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//middleware
app.use(express.json())  //used for post w update yakhod el data di w y passes it to the request handler
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});



app.use(cookieParser());

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())
    
  app.post('/stripe', async (req, res) => {

    //user sends price along with request
    const userPrice = parseInt(req.body.price)*100;
  
    //create a payment intent
    const intent = await stripe.paymentIntents.create({
      
      //use the specified price
      amount: userPrice,
      currency: 'usd'
  
    });
  
    //respond with the client secret and id of the new paymentintent
    res.json({client_secret: intent.client_secret, intent_id:intent.id});
  
  })
  
  //handle payment confirmations
  app.post('/confirm-payment', async (req, res) => {
  
    //extract payment type from the client request
    const paymentType = String(req.body.payment_type);
  
    //handle confirmed stripe transaction
    if (paymentType == "stripe") {
  
      //get payment id for stripe
      const clientid = String(req.body.payment_id);
  
      //get the transaction based on the provided id
      stripe.paymentIntents.retrieve(
        clientid,
        function(err, paymentIntent) {
  
          //handle errors
          if (err){
            console.log(err);
          }
          
          //respond to the client that the server confirmed the transaction
          if (paymentIntent.status === 'succeeded') {
  
            /*YOUR CODE HERE*/  
            
            console.log("confirmed stripe payment: " + clientid);
            res.json({success: true});
          } else {
            res.json({success: false});
          }
        }
      );
    } 
    
  })
  



app.use('/user', userRoutes); //y3ni every route inside of the userRoutes is going to start with /user

app.use('/course', courseRoutes);

app.use('/admin',adminRoutes);

app.use('/instructor', instructorRoutes);

app.use('/trainee', traineeRoutes);

app.use('/Quiz', quizRoutes);

app.get('/farah', (req, res) => {
    res.json({ mssg: 'Welcome fufu' })

})

//connect to db
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONG_URI, { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
//apostrophe: `