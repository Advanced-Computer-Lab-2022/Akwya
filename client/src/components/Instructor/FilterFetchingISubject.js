import react, {useState, useEffect} from 'react'
import axios from 'axios'


// let priceQuery='?price='
function FilterFetchingISubject(props){

const [courses,setCourses] = useState([])
const [subject,setSubject] = useState('')


const handleSubmit = async (e) => {
    e.preventDefault()
    const id = window.location.href.split('/').at(4);

const respnse= await fetch('http://localhost:9000/instructor/filterMyCoursesBySubject/'+id +'?subject='+subject, {
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
}
let rate = 2;
let currency = 'GBP'
switch(props.country) {
    case 'United States':
      rate = 1.1;
      currency = 'USD';
      break;
    case 'Egypt (‫مصر‬‎)':
    // case 'Egypt':
      rate=20;
      currency = 'EGP';
      break;
    default:
      // rate = 3;
  }

return(
    <div>
    <h3> Filter My Courses By Subject </h3>

    <form className="filter" onSubmit={handleSubmit}> 

      <label>Subject</label>
      <input 
        type="text" 
        onChange={(e) => setSubject(e.target.value)} 
        value={subject}
        required
      />
       


      <button>view results</button>
    </form>




{courses.map(course => <li key={course.id}>Title: {course.title} Price: {(Math.round(course.price * rate) + ' ' + currency)} Total Hours: {course.totalHours} Rating: {course.rating}</li>)}

        
    </div>
)


}




export default FilterFetchingISubject 
