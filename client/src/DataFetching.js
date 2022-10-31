// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import FilterFetching from './components/user/FilterFetching'
import GlobalCountry from './App.js'
//async
function DataFetching(props) {
const [courses,setCourses] = useState([])

// const currAPI = 'e5S8BPucZd5LyU2ojp34DR5mUOXZhvEC'
// var myHeaders = new Headers();
// myHeaders.append("apikey", "{currAPI}");

// let to = 'JPY'
// let from = 'GBP'
// let amount = 700
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

useEffect(()=>{
    axios
    .get('http://localhost:9000/course/')
    .then( res => {
        console.log(res)
        setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
},[])

// const { exchangeRates } = require('exchange-rates-api');
// const rate = await exchangeRates().latest().symbols('USD').fetch(); 
// console.log(GlobalCountry);
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
        <h1>Explore Courses</h1>
        <ul>

            {courses.map(course => <li key={course.id}>Title: {course.title} Price: {(Math.round(course.price * rate) + ' ' + currency)} Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
           

        </ul>
        

    </div>
)
}

export default DataFetching 

