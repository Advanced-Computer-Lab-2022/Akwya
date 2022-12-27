// this data fetching is for the indiviudal trainee

import React, { useState, useEffect } from 'react';  
import axios from 'axios'
import FilterFetching from './components/user/FilterFetching'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '/Users/farah/Desktop/Akwya/client/src/components/courseDisplay.css'
import GlobalCountry from './App.js'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

//async

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
 
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

    const [RateAndReview,setRateAndReview] = useState([]);

    const insertStars = (ratins)=>{
      let htmlRating = '<div>'
      for(let i = 0; i < ratins.length; i++)
      {
        htmlRating+='<div>'
          for (let j = 0; j < ratins[i].rate; j++) {
            htmlRating+=  '<span class="fa fa-star checked"></span>'
          }
          for (let k = ratins[i].rate; k < 5; k++) {
            htmlRating+='<span class="fa fa-star-o"></span>'
          }
        htmlRating+=' '+ratins[i].review+'</div>'
      }
    htmlRating += '</div>'
    document.getElementById('area').innerHTML = htmlRating
  }

  
  

return(
  <div class="courseDisplay">

<br/>
<br/>
<br/>

<h1>Explore Popular Courses</h1>

  <div style={{display: "flex","justify-content": "space-between", "overflow": "auto",
}}>

        {courses.map((course) => (
               <div class="ganb" >
              <h2 className="create" align="center"><Link to={{pathname:course._id}}><h2>{course.title}</h2></Link></h2>
              <br/>
              <h2 align="center">Price: {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)}</h2>
              <br/>
              <h2 align="center">Total Hours: {course.totalHours}</h2>
              <br/>
              <h2 align="center">Course Rating: {course.rating }</h2>
              {/* <div id="area" style={{textAlign:'left', padding:'40px', lineHeight:'30px'}}>jj{insertStars(course.rating)}</div> */}
              <h2 align="center">Registered Trainees: {course.registeredTrainees}</h2>
              </div>

          ))}


</div>    
        
</div>    

   
)
}

export default DataFetching 

