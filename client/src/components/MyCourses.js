// import react, {useState, useEffect} from 'react'
// import axios from 'axios'
// import instructor from '../../../server/models/instructor'

// function viewMyCourses() {
// const [courses,setCourses] = useState([])

// useEffect(()=>{
//     axios
//     .get('http://localhost:9000/instructor/viewCoursestitleI')
//     .then( res => {
//         console.log(res)
//         setCourses(res.data)
//     })
//     .catch(err=>{console.log(err)})
// },[])


// return(
//     <div>
//         <h1>View My courses</h1>
//         <ul>
//             {courses.map(course => <li key={instructor.id}>Title: {course.title}</li>)}
           
//         </ul>
//     </div>
// )
// }

// export default viewMyCourses 

