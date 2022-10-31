import { title } from 'process';
import { useState, useEffect } from 'react';
import Swal from "sweetalert2";
//import axios from 'axios';


//choose a course from the results and view (but not open) its details including course subtitles, excercises , total hours of each subtitle, total hours of the course and price 
//(including % discount if applicable) according to the country selected

const ChooseACourse = (x) => {
  const [courses,setCourses] = useState([])
  //const [title,setTitle] = useState('')

  console.log(x)

    //BACKEND FUNCTION  viewACourse/:titlee

    const handleSubmit = async (e) => {

 
    e.preventDefault()
    //  const title =alert(button.name)
    //  var title = event.target.name;
    //const title = window.location.href.split('/').at(4);
    //console.log(title)
    //'?subject='+subject

   

    const response= await fetch('http://localhost:9000/course/viewACourse/635f12fdf0a6147101db80b4', {
      method: 'GET',
      
    })
    


    const json= await response.json()

 
    if(response.ok){
      console.log(json) 
      setCourses(json)
      //setTitle('')

        console.log("AYTEENNN")




    } 
     //setTitle('')
}



    return (

      <form className="choose" onSubmit={handleSubmit}> 

      <button name = "btn" value={courses.id} >Choose</button>



         <ul> 
      {/* {courses.map(course => <li key={course.id}>Title: {course.title}  Total Hours: {course.totalHours} Rating: {course.rating}</li>)} */}
      </ul>

      </form>
    )
//     return (
//     <form className="search" onSubmit={handleSubmit}> 

//     <label>Search in my Courses:</label>
//     <input
//       type='text'
//       onChange={e => setSearch(e.target.value)}
//       placeholder='Search...'
//       value={search}
//       required

//     />
//     <button>Search</button>
//       {error && <div className="error">{error}</div>}


//       <ul>
//       {courses.map(course => <li key={course.id}>Title: {course.title}  Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
//       </ul>

//     </form>
//   )

}



export default ChooseACourse