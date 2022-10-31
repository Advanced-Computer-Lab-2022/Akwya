//ELSHAGHAAALL


import { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
//import course from '../../../../server/models/course';

//choose a course from the results and view (but not open) its details including course subtitles, excercises , total hours of each subtitle, total hours of the course and price 
//(including % discount if applicable) according to the country selected

const ChooseACourse = () => {
  const [courses,setCourses] = useState([])
  //const [choose, setChoose] = useState(``);
  
    
   
   
   //const handleSubmit=??
    
    //BACKEND FUNCTION  viewACourse/:titlee  

    const handleSubmit = async (e) => {
      

    e.preventDefault()

    const id = window.location.href.split('/').at(4);

    const response= await fetch('http://localhost:9000/instructor/viewACourse/'+id, {
        method: 'GET'
    })


    const json= await response.json()


    if(response.ok){
        
        setCourses(json)
        

        console.log("AYTEENNN")
        console.log(json)

        
        //setChoose('')
        

    } 
}
    

    

    return (
      
      <form className="choose" onSubmit={handleSubmit}> 
      
      <button>Choose</button>
        
  
  
         <ul> 
      {courses.map(course => <li key={course.id}>Title: {course.title}  Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
      </ul>
  
      </form>
    )}

          
    
           
  



export default ChooseACourse
