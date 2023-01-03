// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import '../components/courseDisplay.css'

function GuestCourse(props) {

const [courses,setCourses] = useState([])
const ID = window.location.href.split('/').at(3);
console.log(ID)
useEffect(()=>{
    axios
    .get('http://localhost:9000/course/viewACourse/'+ID)
    .then( res => {
        console.log(res)
        setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
},[])

let rate = 1;
let currency = 'GBP'
switch(props.country) {
    case 'United States':
      rate = 1.15;
      currency = 'USD';
      break;
    case 'Egypt (‫مصر‬‎)':
    // case 'Egypt':
      rate=27.85;
      currency = 'EGP';
      break;
    default:
      // rate = 3;
  }

   
//guest
    return(
        <div class="courseDisplay2">
        <h1>Course Details</h1>
            <ul>
    
{/* 
            {courses.map(course => <li style={{"display": "inline-flex"}} key={course._id}>Title: {course.title} 
            Price: <s style={{display: course.promotion==0 ? 'none' : 'block',"margin-inline":"5px"}}>{course.price} </s>  {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} 
            Total Hours: {course.totalHours} 
            Rating: {course.rating} 
            Summary: {course.summary}</li>)}
                */}
                {courses.map(course => <p key={course._id}><h3>Title: {course.title} </h3>  
                                                        <h3 style={{"display": "inline-flex"}}>Price:<s style={{display: course.promotion==0 ? 'none' : 'block',"margin-inline":"5px"}}>{course.price*rate} </s>   {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} </h3> 
                                                        <h3>Total Hours: {course.totalHours}</h3> 
                                                        <h3>Rating: {course.rating}</h3> 
                                                        <h3>Summary: {course.summary}</h3></p>)}
    
            </ul>
    
        </div>
    )
}
export default GuestCourse 