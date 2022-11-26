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