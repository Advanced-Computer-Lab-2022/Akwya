// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from "sweetalert2";


function MyCourse(props) {
const [courses,setCourses] = useState([])
const [error, setError] = useState(null)


const CourseID = window.location.href.split('/').at(4);
const TraineeID = "635849b7a58d8beb73e81787";

const ID = window.location.href.split('/').at(4);
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

  const handleSubmit2 = async (e) => {
    e.preventDefault()

    const id = window.location.href.split('/').at(5);
    const respnse= await fetch(`http://localhost:9000/trainee/drop/${CourseID}/${TraineeID}`, {
        method: 'GET',
    })  
    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("Course Successfully Dropped!")
        Swal.fire({
            title: 'Course Successfully Dropped!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })  
        setError(null)
    } 
}


const handleSubmit = async (e) => {
    e.preventDefault()

    const id = window.location.href.split('/').at(5);
    const respnse= await fetch(`http://localhost:9000/trainee/register/${CourseID}/${TraineeID}`, {
        method: 'GET',
    })  
    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("Course Successfully Registered!")
        Swal.fire({
            title: 'Course Successfully Registered!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })  
        setError(null)
    } 
}

if(window.location.href.split('/').at(3)=='userCorporate'){

  return(
    <div>
        
        <h1>Course Details</h1>
        <ul>

            {courses.map(course => <li key={course._id}>Title: {course.title} Total Hours: {course.totalHours} Rating: {course.rating} Summary: {course.summary}</li>)}
           

        </ul>
        
        <form className="create" onSubmit={handleSubmit}> 
            <h3>Add/Drop The Course</h3>
            <button>Add Course</button>
            {error && <div className="error">{error}</div>}
        </form>
        <form className="create" onSubmit={handleSubmit2}> 
          <button>Drop Course</button>
          {error && <div className="error">{error}</div>}
        </form>

    </div>
)
}




return(
    <div>
        <h1>Course Details</h1>
        <ul>

            {courses.map(course => <li key={course._id}>Title: {course.title} Price: {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} Total Hours: {course.totalHours} Rating: {course.rating} Summary: {course.summary}</li>)}
           

        </ul>
        
        <form className="create" onSubmit={handleSubmit}> 
            <h3>Add/Drop The Course</h3>
            <button>Add Course</button>
            {error && <div className="error">{error}</div>}
        </form>
        <form className="create" onSubmit={handleSubmit2}> 
          <button>Drop Course</button>
          {error && <div className="error">{error}</div>}
        </form>

    </div>
)
}

export default MyCourse 

