import { useState } from 'react'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'



//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const UserSearchCourse = () => {
  const [search, setSearch] = useState(``);
  const [error, setError] = useState(null)
  const [courses,setCourses] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const id = window.location.href.split('/').at(4);
    console.log(id)
    console.log(search)


    const response= await fetch('http://localhost:9000/course/search/'+search, {
        method: 'GET'
    })
      
  
    const json= await response.json()


    if(!response.ok){
        setError(json.error)

        
    }
    if(response.ok){
        
        setCourses(json)
        

        console.log("Your Search is here")
        console.log(json)

        // Swal.fire({
        //     title: 'Your Search is here!',
        //     icon: 'success',
        //     confirmButtonColor: '#38a53e',
        //     confirmButtonText: 'OK'
        //   })
        setError(null)
        setSearch('')
        

    } 
}


  return (
    <div style={{ "text-align" : 'center' }}>
    <form className="search" onSubmit={handleSubmit}> 
    <br/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


    <label>Search in All Courses:</label>
    <input
      type='text'
      onChange={e => setSearch(e.target.value)}
      placeholder='Search...'
      value={search}
      required

    />
  <button type="submit"><i class="fa fa-search"></i></button>
      {error && <div className="error">{error}</div>}
      <div style={{ "text-align" : 'left' }}>

      <ul>
      {courses.map(course => <li key={course._id}>Title: <Link to={{pathname:course._id}}><h3 style={{display:"inline",margin:"10px"}}>{course.title}</h3></Link>  Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
      </ul>
      </div>

    </form>
    </div>
  )}

  export default UserSearchCourse 
