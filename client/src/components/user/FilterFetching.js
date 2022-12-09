import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



// let priceQuery='?price='
function FilterFetching(props){

const [courses,setCourses] = useState([])
const [LB,setLB] = useState(0)
const [UB,setUB] = useState(1000000)

const handleSubmit = async (e) => {
    e.preventDefault()

    let min = LB/rate
    let max = UB/rate

const respnse= await fetch('http://localhost:9000/course/filterCoursesByPrice?price='+min+','+max, {
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
    console.log("new admin added")
    setCourses(json)
     
    }
    // setUB=(100000)
    // setLB=(0)
}
// useEffect(()=>{
//     axios
//     .get('http://localhost:9000/course/filterCoursesByPrice'+"?price=3000,9000")
//     .then( res => {
//         console.log(res)
//         console.log("testing")
//         setCourses(res.data)
//     })
//     .catch(err=>{console.log(err)})
// },[])

let rate = 1;
let currency = 'GBP'
switch(props.country) {
    case 'United States':
      rate = 1.15;
      currency = 'USD';
      break;
    case 'Egypt (‫مصر‬‎)':
    // case 'Egypt':
      rate=27.85;
      currency = 'EGP';
      break;
    default:
      // rate = 3;
  }

return(
    <div>
    <h3> Filter All Courses By Price </h3>

    <form className="filter" onSubmit={handleSubmit}> 
      <h3>Filter Ranges</h3>

      <label>Lower bound</label>
      <input 
        type="number" 
        onChange={(e) => setLB(e.target.value)} 
        value={LB}
        required
      />
        <br/>
      <label>Upper Bound</label>
      <input 
        type="number" 
        onChange={(e) => setUB(e.target.value)} 
        value={UB}
      required/>
        <br/>


      <button>view results</button>
    </form>




{courses.map(course => <li key={course._id}><Link to={{pathname:course._id}}><h2>{course.title}</h2></Link> Price: {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} Total Hours: {course.totalHours} Rating: {course.rating}</li>)}

        
    </div>
)


}




export default FilterFetching 
