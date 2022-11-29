import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import ViewMyCourses from '../components/MyCourses.js'
import CreateACourse from '../components/Instructor/CreateCourse.js'
import SearchACourse from '../components/Instructor/SearchCourse.js'
import DataFetching from '../DataFetching'
import FilterFetching from '../components/user/FilterFetching.js'
import FilterFetchingI from '../components/Instructor/FilterFetchingI.js'
import FilterFetchingISubject from '../components/Instructor/FilterFetchingISubject.js'

import UserSearchCourse from '../components/user/UserSearchCourse'

import FilterByRatingAndSubject from '../components/Instructor/FilterByRatingAndSubject.js'
import ChangePassword from '../components/Instructor/ChangePassword.js'

 import Contract from '../components/Instructor/Contract.js'


const Instructor = (props) => {

 
  return (

    
    <div>   

    <div className="instructor">
    <h2>Instructor Page</h2>
      <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
       <h1>Hello Instructor</h1>
      <ChangePassword/>
       <Link to="/ViewProfileInstructor/6381101753d48ea316365f94">

          <h3>View My Profile</h3>
       </Link>

        <SearchACourse/>
        <ViewMyCourses/>
        <FilterFetchingI  country={props.country}/>
        <FilterFetchingISubject  country={props.country}/>
        <FilterByRatingAndSubject  country={props.country}/>

        <CreateACourse/>
       


     </div>
     <br/>
     <UserSearchCourse country={props.country}/>
     <DataFetching country={props.country}/>
     <FilterFetching  country={props.country}/>
     
     <div className="quiz">
        
        
  
          </div>
     
<Link to="/Contract">
<h3>View contract</h3>
</Link>
     </div>




     

    
  )}
  
  export default Instructor