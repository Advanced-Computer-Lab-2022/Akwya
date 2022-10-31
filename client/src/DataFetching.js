// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import FilterFetching from './components/user/FilterFetching'
import { Link } from 'react-router-dom'


function DataFetching() {
const [courses,setCourses] = useState([])

useEffect(()=>{
    axios
    .get('http://localhost:9000/course/')
    .then( res => {
        console.log(res)
        setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
},[])


return(
    <div>
        <h1>Explore Courses</h1>
        <ul>

        {courses.map(course => <li key={course.id}><Link to={{pathname:course._id}}><h2>{course.title}</h2></Link>Title:   Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
           

        </ul>
        

    </div>
)
}

export default DataFetching 

