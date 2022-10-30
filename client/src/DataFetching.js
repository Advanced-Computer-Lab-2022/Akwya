// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import FilterFetching from './components/user/FilterFetching'

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

            {courses.map(course => <li key={course.id}>Title: {course.title} Price: {course.price} Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
           

        </ul>
        <h2> Filter By Price </h2>
        <form className='filter'>
        <input type="checkbox" handleChange={FilterFetching} id="range1" name="range1" value="range1"/>
    <label for="range1"> 0-3000</label><br/>
<input type="checkbox" id="range2" name="range2" value="range2"/>
<label for="range2"> 3000-6000</label><br/>
<input type="checkbox" id="range3" name="range3" value="range3"/>
<label for="range3"> 6000+</label><br></br>
</form>

    </div>
)
}

export default DataFetching 

