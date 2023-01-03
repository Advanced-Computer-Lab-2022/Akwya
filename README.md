# Akwya

Akwya is an Online Learning System that works with professional instructors to offer online courses, through which individuals can attend pre-recorded
courses online. These courses provide quizzes for the user to test his/her understanding of the course; and upon completion, certifications shall be acquired.

## Tech Stack

**Client:** React, HTML, CSS, JavaScript
**Server:** NodeJS, Express, MongoDB


## Used By

This system is used by the following:
- Admins
    administrators who run the website and are in control of everything
- Instructors
     highly 
qualified instructors bring a wealth of knowledge and experience 
to our courses and provide students with exceptional material
- Individual Trainees
    a regular user 
- Corporate Trainees 
    user who is part of partnered company 

- Guests
    Unregistered user who can only preview features without using them

## Installation

```bash
  cd server
  npm Install
  npm install @stripe/react-stripe-js 
  npm install @stripe/stripe-jest 
  npm install @testing-library/jest-dom 
  npm install @testing-library/react 
  npm install @testing-library/user-event axios bootstrap express react react-bootstrap react-dom react-paypal-button-v2 react-router-dom react-scripts react-smart-payment-buttons stripe
  npm install jsonwebtoken
  npm install bcrypt
  npm install cookie-parser
  npm install dotenv
  npm install sweetalert
  npm install sweetalert2 

  cd client
  npm Install
  npm install @stripe/react-stripe-js 
  npm install @stripe/stripe-jest 
  npm install @testing-library/jest-dom 
  npm install @testing-library/react 
  npm install @testing-library/user-event axios bootstrap express react react-bootstrap react-dom react-paypal-button-v2 react-router-dom react-scripts react-smart-payment-buttons stripe
  npm install styled-components

```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


PORT=`Port number to be used`
MONG_URI= `MONG_URI`
AUTH_EMAIL= `Mongo DB Cluster email`
AUTH_PASS= `Mongo DB Cluster password`
## Functionalities
Admin
    Add new users(Other admins, corporate trainees, instructors) to the System
    Responsible for promotions
    Grant access to courses
    Resolve Problems
    Responsible for financial issues

Instructors
    Manage his course content 
    Create Quizzes for his Course
    Add promotions to his courses

Trainees
    Corporate trainees and individual trainees have;
    Similarities in the following features:
        Register for courses
        Take Quiz for the Course
        View his/her progress in the course
        Rate the courses and the Instructors
        Take notes while attending the online lecture
    Differences in the following features:
        Individual trainees are responsible for their payments using the website's wallet System or credit card
        Individual trainees can request refunds and drop the course

Guest 
    Users with limited functionalities where they can view features but not fully make use of them

Users
    All users have the following features available: 
        Report Problems
        Search for courses
        Filter out courses


## Features

- Fullscreen mode
- Accessible to All Users
- Well Planned Information Architecture
- Well-Formatted Content That Is Easy to Scan
- Fast Load Times
- Browser Consistency
- Effective Navigation
- Good Error Handling
## Run Locally

Clone the project

```bash
  git clone https://github.com/Advanced-Computer-Lab-2022/Akwya.git
```

Go to the project directory

```bash
  cd Akwya
  
Install dependencies
```refer to installation section

```Split Terminal

Start the server for the back end
        cd server
        npm start
Start the client for the front end
        cd client
        npm start


```

## Screenshots

(https://drive.google.com/file/d/1XAsBdJoeXtJ_CzTI_imf0k1JGmXiuO_E/view?usp=sharing)
## Usage/Examples
Find below code snippets for how an admin can add a trainee to the system 


```For the Models(Database)

import mongoose from 'mongoose'; //to connect with mongodb

const traineeSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fname: String,
    lname: String,
    gender: String,
    traineetype: String, //corporate or individual
    courses: [{ courseid: String, progress: Number,courseName:String }],
    country: String,
    wallet: Number
}, { timestamps: true }

)
 
    ;

const trainee = mongoose.model('trainee', traineeSchema);

export default trainee;
```


```BackEnd
import trainee from "../models/trainee.js"


export const createTrainee= async(req,res) => {
    const {username,password,email}=req.body
    const wallet=0;
    const type = 'corporate'
    //bykon corporate
    try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const newTrainee = await trainee.create({username:username,password:hashedPassword,email:email,traineetype:type,wallet:wallet});
            const token = createToken(username);
    
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json(newTrainee)
      
    } catch (error) {
        res.status(400).json({error: error.message})
    }


}


```

```For the Routes
import express from "express";
const router =express.Router()
import {createTrainee} from "../controllers/adminController.js"
router.post('/newTrainee',createTrainee)


app.use('/admin',adminRoutes);

```
```Index.js
import traineeRoutes from './routes/trainee.js';

//connect to db
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONG_URI, { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
```









```For the Front End
import { useState } from 'react'
import Swal from "sweetalert2";
import './admin.css'

const AddTrainee = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const trainee = {username, password,email}
    
# Example of using an API endpoint

    const respnse= await fetch('/admin/newTrainee', {
        method: 'POST',
        body: JSON.stringify(trainee) ,
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("new Trainee added")
        Swal.fire({
            title: 'New Trainee added!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          })  
        setError(null)
        setUsername('')
        setPassword('')
        setEmail('')


    } 
}

#Example of rendering a React component 
  return (
    <div class="ganb">
    <form className="create" onSubmit={handleSubmit}> 
      <h1>New Trainee</h1>
      <div class="txt_field">
      <input 
        type="username" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username}
        required
      />
       <label>Username</label>
       </div>
       <div class="txt_field">
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
      required/>
      <label>Email</label>
      </div>
      <div class="txt_field">
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      required/>
      <label>Password</label>
      </div>   

      <button>Add New Trainee</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
)
}

export default AddTrainee

```
## API Reference

#### Get all items

```http
  POST /newTrainee/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | trainee's username |
| `password`| `string` | trainee's initially assigned password|
etc...



Add a new Trainee to the System

#### Admin APIs

router.get('/',getAdmins)
router.get('/refundTrainee',refundTrainee)
router.post('/newAdmin',createAdmin)
router.post('/newInstructor',createInstructor)
router.post('/newTrainee',createTrainee)
router.get('/courseDiscountAdmin/:id',courseDiscountAdmin)
router.get('/promotionFound/:id', promotionFound)
router.get('/GrantAccess/:TraineeID/:CourseID', grantAccess)
router.get('/RequestAccess/:TraineeID/:CourseID', requestAccess)
router.get('/viewRequests/', viewRequests)
router.get('/viewRefunds/', viewRefunds)



#### Course APIs

router.get('/viewCourseDeets',viewCourses)
router.get('/viewCoursePrices',viewCoursesPrices)
router.get('/filterCoursesOnSubjAndRating/:id/:title',filterCoursesOnSubjAndRating)
router.get('/filterCoursesByPrice', filterCoursesByPrice)
router.get('/', getCourses)
router.get('/search/:search',searchCourse)
router.get('/viewACourse/:titlee',viewACourse)
router.post('/report',reportAProblem)
router.post('/followUp',followUpOnAProblem)
router.post('/followUp2',adminFollowUpOnAProblem)
router.post('/problemState',problemState)
router.post('/:id',createCourse)
router.get('/getProblems/:id',getProblems)
router.get('/getAllProblems',getAllProblems)
router.get('/getMyCourseName/:id',getMyCourseName)
router.delete('/:id',deleteCourse)
router.delete('/',deleteAllCourses)
router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a guest'})
})


####Instructor APIs

router.get('/viewCoursestitleI/:id', viewCoursestitleI )
router.get('/filterMyCoursesByPrice/:id',filterCoursesByPriceI)
router.get('/filterMyCoursesBySubject/:id',filterCoursesBySubjectI)
router.get('/search/:id/:search',searchCourseI)
router.get('/filterCoursesByRatingAndSubject',filterCoursesByRatingAndSubject)
router.post('/:id', createCourse )
router.delete('/', deleteAllInstructors )
router.post('/addVideo/:courseID', addVideo )
router.post('/addPreview/:courseID', addPreview )
router.get('/viewVideos/:courseID', viewVideos )
router.get('/viewPreview/:courseID', viewPreview )
router.get('/CanViewVideos/:courseID/:instructorID', CanViewVideos )
router.get('/viewEmail/:id', viewEmail )
router.get('/editEmail/:id', editEmail )
router.get('/viewRating/:id', ViewRating )
router.get('/changePassword/:id', changePassword)
router.get('/checkPassword/:id', checkPassword)
router.get('/viewBio/:id', viewBio )
router.get('/editBio/:id', editBio )
router.get('/getRatings/:id', getRatings )
router.get('/:id/myRating', ViewRating)
router.get('/notFirst/:id', notFirst)


### Stripe APIs
app.post('/confirm-payment')
app.post('/stripe')
## Helpful Resources
Useful Resources that were used in the development of this project:

Stripe API:

https://youtu.be/1r-F3FIONl8

Node.js

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY

Express.js

https://www.youtube.com/watch?v=fgTGADljAeg

ES6:

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH-0FlQnruw2rd1HuiYJHHkm

React introduction:

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK

React Hooks -- functional components

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h

https://youtu.be/hQAHSlTtcmY

JWT authentication:

https://www.youtube.com/watch?v=mbsmsi7l3r4

https://www.youtube.com/watch?v=-RCnNyD0L-s

https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

-Contributor Name: Farah Wanas
-Contributor Name: Yasmine Ashraf
-Contributor Name: Ayten Mazen 
-Contributor Name: Omar Kamal
-Contributor Name: Youssef Amer

Special thanks to 
Noha Hamid
Hadwa Pasha
Nada Ibrahim 
## Support

For support, email akwyaawy@hotmail.com 
