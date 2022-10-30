import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import ViewMyCourses from '../components/MyCourses.js'
import CreateACourse from '../components/Instructor/CreateCourse.js'
import SearchACourse from '../components/Instructor/SearchCourse.js'
import DataFetching from '../DataFetching'



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
        <CreateACourse/>

     </div>
     <DataFetching/>

     </div>

    
  )}
  
  export default Instructor