import react, {useState, useEffect} from 'react'
import axios from 'axios'


// let priceQuery='?price='
function FilterByRatingAndSubject(){

const [courses,setCourses] = useState([])
const [subject,setSubject] = useState('')
const [rating,setRating] = useState(0)

const handleSubmit = async (e) => {
    e.preventDefault()

const respnse= await fetch('http://localhost:9000/instructor/filterCoursesByRatingAndSubject?subjectAndRating='+subject+','+rating, {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json'
    }
})
const json= await respnse.json()

if(!respnse.ok){
    console.log(json.error)
}
if(respnse.ok){
   console.log(json)
    setCourses(json)
     
    }
    setSubject('')
    setRating(0)
}

return(
    <div>
    <h3> Filter My Courses By Rating and Subject </h3>

    <form className="filter" onSubmit={handleSubmit}> 

      <label>Subject</label>
      <input 
        type="text" 
        onChange={(e) => setSubject(e.target.value)} 
        value={subject}
        
      />
       
       <label>Rating</label>
      <input 
        type="Number" 
        onChange={(e) => setRating(e.target.value)} 
        value={rating}
        
      />
       

      <button>view results</button>
    </form>




{courses.map(course => <li key={course.id}>Title: {course.title} Price: {course.price} Total Hours: {course.totalHours} Rating: {course.rating}</li>)}

        
    </div>
)


}




export default FilterByRatingAndSubject 
