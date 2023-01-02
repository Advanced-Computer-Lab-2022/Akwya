// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { json, Link } from 'react-router-dom'
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
import '../../components/courseDisplay.css'


//async
let progress;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
 
function MyCourses() {
const [courses,setCourses] = useState([])
const [progress,setProgress] = useState(0)

const TraineeID = window.location.href.split('/').at(4);

useEffect(()=>{
    axios
    .get(`http://localhost:9000/trainee/myCourses/${TraineeID}`)
    .then( res => {
        console.log(res)
        setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
},[])

  
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
  <div class="courseDisplay">

  <br/>
  <br/>
  <br/>
  
  <h1 style={{textAlign:'center',color:'white'}}>My Courses</h1>
    <div class="allganb" style={{display: "flex","justify-content": "space-between", "overflow": "auto"
  }}>
  
          {courses.map((course) => (
                 <div class="ganb" >
                   
                <h2 className="create" align="center"><Link to={{pathname:course._id}}><img style={{borderRadius:'10px', width:'400px'}} src={thumbnail(course.previewVideo)} alt="Course"></img><h1>{course.title}</h1></Link></h2>
                <div id={courses.indexOf(course)+'c'} style={{fontSize:'20px'}}>
                <h2 align="center" >{insertStars(course.rating, courses.indexOf(course)+'c')}</h2>
                </div>               
                <h2 align="center">Total Hours: {course.totalHours}</h2>
                
                
                {/* <div id="area" style={{textAlign:'left', padding:'40px', lineHeight:'30px'}}>jj{insertStars(course.rating)}</div> */}
                <h2 align="center">Registered Trainees: {course.registeredTrainees}</h2>
                
                </div>
  
            ))}
  
  
  </div>    
          
  </div>    
  
     
        

   
)
}

export default MyCourses 

