import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const Instructor = () => {
const[courses,setCourses]=useState(null)
useEffect(()=>{
    const viewMyCourses=async()=>{
        const respnse = await fetch('/course/viewCourseDeets')
        const json=await respnse.json()
        if (respnse.ok){
            setCourses(json)

        }

        
}
viewMyCourses()
},[])

 
  return (
    <div className="instructor">
      <div className="courses">
        {courses && courses.map((course)=>(
            <p key={course.title}>{course.price}</p>
        ))}
        </div>
     </div>
    
  )}


        

export default Instructor