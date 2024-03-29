import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



// let priceQuery='?price='
function FilterFetchingI(props){

const [courses,setCourses] = useState([])
const [LB,setLB] = useState(0)
const [UB,setUB] = useState(1000000)

const handleSubmit = async (e) => {
    e.preventDefault()
    const id = window.location.href.split('/').at(4);

const respnse= await fetch('http://localhost:9000/instructor/filterMyCoursesByPrice/'+id +'?price='+LB+','+UB, {
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
    setCourses(json)
     
    }
    setUB=(100000)
    setLB=(0)
}
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
    <h3> Filter My Courses By Price </h3>

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




{courses.map(course => <li key={course._id}><Link to={{pathname:course._id}}><h3 style={{display:"inline",margin:"10px"}}>{course.title}</h3></Link>
<h3 style={{"display": "inline-flex"}}>Price:<s style={{display: course.promotion==0 ? 'none' : 'block',"margin-inline":"5px"}}>{course.price*rate} </s>   {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} </h3> 
  Total Hours: {course.totalHours} Rating: {course.rating}</li>)}

        
    </div>
)


}




export default FilterFetchingI 
