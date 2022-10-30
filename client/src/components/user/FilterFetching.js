import react, {useState, useEffect} from 'react'
import axios from 'axios'


// let priceQuery='?price='
function FilterFetching(){

const [courses,setCourses] = useState([])
const [LB,setLB] = useState(0)
const [UB,setUB] = useState(1000000)

const handleSubmit = async (e) => {
    e.preventDefault()

const respnse= await fetch('http://localhost:9000/course/filterCoursesByPrice?price='+LB+','+UB, {
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
    setUB=(100000)
    setLB=(0)
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

return(
    <div>
    <h2> Filter By Price </h2>

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




{courses.map(course => <li key={course.id}>Title: {course.title} Price: {course.price} Total Hours: {course.totalHours} Rating: {course.rating}</li>)}

        
    </div>
)


}




export default FilterFetching 
