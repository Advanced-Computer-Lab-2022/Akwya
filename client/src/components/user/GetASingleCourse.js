// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'

function MyCourse() {
const [courses,setCourses] = useState([])

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


return(
    <div>
        <h1>Course Details</h1>
        <ul>

            {courses.map(course => <li key={course._id}>Title: {course.title} Price: {course.price} Total Hours: {course.totalHours} Rating: {course.rating} Summary: {course.summary}</li>)}
           

        </ul>
        

    </div>
)
}

export default MyCourse 

