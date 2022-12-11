import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ViewMyCourses() {
const [courses,setCourses] = useState([])

const id = window.location.href.split('/').at(4);


useEffect(()=>{
    axios
    .get('http://localhost:9000/instructor/viewCoursestitleI/'+id)
    .then( res => {
        console.log(res)
        setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
},[])

//<Link to={{pathname:course._id}}><h2>{course.title}</h2></Link><
return(
    <div>
        <h1>View My courses</h1>
        <ul>
        {courses.map(course => <li key={course._id}>Title: <Link to={{pathname:course._id}}><h3 style={{display:"inline",margin:"10px"}}>{course.title}</h3></Link></li>)}


        </ul>
    </div>
)
}

export default ViewMyCourses 

