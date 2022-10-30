import react, {useState, useEffect} from 'react'
import axios from 'axios'


function FilterFetching(){
const [courses,setCourses] = useState([])

useEffect(()=>{
    axios
    .get('http://localhost:9000/course/filterCoursesByPrice',{
        body:JSON.stringify({
            x:0, y:3000
          }) 
    })
    .then( res => {
        console.log(res)
        console.log("testing")
        setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
},[])

return(
    <div>
    
{courses.map(course => <li key={course.id}>Title: {course.title} Price: {course.price} Total Hours: {course.totalHours} Rating: {course.ratings}</li>)}

    </div>
)
}






export default FilterFetching 
