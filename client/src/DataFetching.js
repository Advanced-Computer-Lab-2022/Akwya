// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import FilterFetching from './components/user/FilterFetching'
import GlobalCountry from './App.js'
async function DataFetching() {
const [courses,setCourses] = useState([])

useEffect(()=>{
    axios
    .get('http://localhost:9000/course/')
    .then( res => {
        console.log(res)
        setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
},[])
const { exchangeRates } = require('exchange-rates-api');
const rate = await exchangeRates().latest().symbols('USD').fetch();   


return(
    <div>
        <h1>Explore Courses</h1>
        <ul>

            {courses.map(course => <li key={course.id}>Title: {course.title} Price: {(course.price * rate)} Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
           

        </ul>
        

    </div>
)
}

export default DataFetching 

