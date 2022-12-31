// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { json, Link } from 'react-router-dom'
import '../../components/courseDisplay.css'

function MyCourse(props) {
const [courses,setCourses] = useState([])

const ID = window.location.href.split('/').at(5);
console.log(ID)
useEffect(()=>{
    axios
    .get('http://localhost:9000/course/viewACourse/'+ID)
    .then( res => {
        console.log(res)
        setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
},[])

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


  const insertStars = (ratin, idx)=>{
    let htmlRating = '<div>'
   
        for (let j = 0; j < ratin; j++) {
          htmlRating+=  '<span class="fa fa-star checked"></span> '
        }
        for (let k = ratin; k < 5; k++) {
          htmlRating+='<span class="fa fa-star-o"></span> '
        }
   
      
    htmlRating += '</div>'
    // console.log(ratin);
    // console.log(idx);
    if(!document.getElementById(idx)){return}
    document.getElementById(idx).innerHTML = htmlRating
  }
  
  const thumbnail=(link)=>{
  // console.log(link.split("=").at(1));
  return 'https://img.youtube.com/vi/'+link.split("=").at(1)+'/0.jpg'
  }

return(
    <div>

        {courses.map((course) => (
                 <div class="ganb" >
                   
                <h2 className="create" align="center">{course.title}</h2>
                <div id={courses.indexOf(course)+'c'} style={{fontSize:'20px'}}>
                <h2 align="center" >Course Rating {insertStars(course.rating, courses.indexOf(course)+'c')}</h2>
                </div>               
                <h2 align="center">Total Hours: {course.totalHours}</h2>
                
                
                {/* <div id="area" style={{textAlign:'left', padding:'40px', lineHeight:'30px'}}>jj{insertStars(course.rating)}</div> */}
                <h2 align="center">Registered Trainees: {course.registeredTrainees}</h2>
                
                </div>
  
            ))}           

        

    </div>
)
}

export default MyCourse 

