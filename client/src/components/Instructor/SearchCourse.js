import { useState } from 'react'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'


//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const SearchACourse = () => {
  const [search, setSearch] = useState(``);
  const [error, setError] = useState(null)
  const [courses,setCourses] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const id = window.location.href.split('/').at(4);
    console.log(id)
    console.log(search)


    const response= await fetch('http://localhost:9000/instructor/search/'+id+'/'+search, {
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
    <form className="search" onSubmit={handleSubmit}> 

    <label>Search in my Courses:</label>
    <input
      type='text'
      onChange={e => setSearch(e.target.value)}
      placeholder='Search...'
      value={search}
      required

    />
    <button>Search</button>
      {error && <div className="error">{error}</div>}


      <ul>
      {courses.map(course => <li key={course._id}>Title: <Link to={{pathname:course._id}}><h2>{course.title}</h2></Link>  Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
      </ul>

    </form>
  )}

  export default SearchACourse 
