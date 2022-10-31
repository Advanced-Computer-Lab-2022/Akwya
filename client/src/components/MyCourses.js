import react, {useState, useEffect} from 'react'
import axios from 'axios'
import ChooseACourse from '../components/Instructor/ChooseCourse'

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


return(
    <div>
        <h1>View My courses</h1>

      
         

        <ul>
            {courses.map(course => <li key={course.id}>Title: {course.title}   <ChooseACourse call parentfunction={() => ChooseACourse()}/>
        </li>
            )}
           
        </ul>
    </div>
)
}

export default ViewMyCourses 

