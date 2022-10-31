import react, {useState, useEffect} from 'react'
import axios from 'axios'

const { exchangeRates } = require('exchange-rates-api');

const HandleCurrency = async (e) => {

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


export default HandleCurrency 