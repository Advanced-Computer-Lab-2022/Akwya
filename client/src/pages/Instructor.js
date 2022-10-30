import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import viewMyCourses from '../components/MyCourses.js'
import CreateACourse from '../components/Instructor/CreateCourse.js'
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
        {/* <viewMyCourses/> */}
        <CreateACourse/>

     </div>
     <DataFetching/>

     </div>

    
  )}
  
  export default Instructor