import react, {useState, useEffect} from 'react'
import axios from 'axios'
import ChooseACourse from '../components/user/ChooseCourse.js'

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
            {courses.map(course => <li key={course.id}>Title: {course.title}  Total Hours: {course.totalHours} Rating: {course.rating} <ChooseACourse call parentfunction={() => ChooseACourse(course.id)}/>
        </li>
            )}

        </ul>

    </div>
)
}

export default DataFetching 

