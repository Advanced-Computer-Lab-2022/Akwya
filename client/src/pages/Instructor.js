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



const Instructor = () => {

 
  return (

    
    <div>   

    <div className="instructor">
    <h2>Instructor Page</h2>
      <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
       <h1>Hello Instructor</h1>
      <div className="courses">
        
        </div>
        <SearchACourse/>
        <ViewMyCourses/>
        <FilterFetchingI/>
        <FilterFetchingISubject/>

        <CreateACourse/>

     </div>
     <br/>
     <UserSearchCourse/>
     <DataFetching/>
     <FilterFetching/>
     </div>

    
  )}
  
  export default Instructor