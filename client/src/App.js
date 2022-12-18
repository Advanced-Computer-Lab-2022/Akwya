import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Admin from './pages/Admin';
import User from './pages/User';
import UserCorporate from './pages/UserCorporate';
import Instructor from './pages/Instructor'
import Guest from './pages/Guest'
import Contract from './pages/Contract'
import Policy from './pages/Policy'
import SignUp from './pages/SignUp'


import ViewProfileInstructor from './pages/ViewProfileInstructor';
import Reset from './pages/ResetPassword';
import Resett from './pages/ResetPwTrainee';

import React, { useState, useEffect } from 'react';  
import axios from 'axios'

import CountryDropdown from 'country-dropdown-with-flags-for-react';  
import Course from './pages/Course';
import CourseI from './pages/CourseI';
import Quiz from './pages/Quiz';
import TakeQuiz from './pages/TakeQuiz';
import DoneWithMyQuiz from './pages/DoneWithMyQuiz';


let GlobalCountry = 'United Kingdom';


function App() {
  const [country, setCountry] = useState('')
  //const??
  const handleCountry = (e) => {
    // console.log(e.target.value);
    // country = e.target.value;
    setCountry(e.target.value);
  }

  //refresh when country changes
  useEffect(()=>{
    axios
    .get('http://localhost:9000/course')
    .then( res => {
        // console.log(res)
        // setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
  },[country])

  return (
    <div className="App">

      <CountryDropdown  id="UNIQUE_ID" className='YOUR_CSS_CLASS' preferredCountries={['gb', 'us','eg']}  value="" handleChange={e => {handleCountry(e)}}></CountryDropdown>   


      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/admin"
              element={<Admin />}
            />
            <Route
              path="/user/"
              element={<User country={country} tid='6396424da56263086dde2489'/>}
            />
            <Route

              path="/userCorporate/"
              element={<UserCorporate country={country} tid='635849b7a58d8beb73e81787'/>}
            />
            <Route
              path="/instructor/:id"
              element={<Instructor country={country}/>}
            />
            <Route
              path="/guest"
              element={<Guest country={country}/>}
            />
            <Route
              path="/guest/:id"
              element={<Course country={country}/>}
            />
            <Route
              path="/user/:id"
              element={<Course country={country}/>}
            />
            <Route
              path="/userCorporate/:id"
              element={<Course country={country}/>}
            />
            <Route
              path="/instructor/:id/:id"
              element={<CourseI country={country}/>}
            />

            <Route
              path="/instructor/:id/:id/Quiz"
              element={<Quiz/>}
              />
              <Route
              path="/user/:id/TakeQuiz"
              element={<TakeQuiz/>}
              />
              <Route
              path="/userCorporate/:id/TakeQuiz"
              element={<TakeQuiz/>}
              />
               <Route
              path="/user/:id/TakeQuiz/Done"
              element={<DoneWithMyQuiz/>}
              />

            <Route
              path="/ViewProfileInstructor/:id"
              element={<ViewProfileInstructor country={country}/>}
            />
            <Route
              path="/reset"
              element={<Reset/>}
              />
              <Route
              path="/resett"
              element={<Resett/>}
              />
            <Route
              path="/Course"
              element={<Course/>}
            />
            <Route
              path="/Contract"
              element={<Contract/>}
            />
            <Route
              path="/Policy"
              element={<Policy/>}
            />
             <Route
              path="/signup"
              element={<SignUp/>}
            />
          </Routes>



        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;