// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
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
 
function DisplayCourses() {
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

  

return(   
    <div class="courseDisplay">
  
  <br/>
  <br/>
  <br/>
  
  <h1>Explore Courses</h1>
  
    <div style={{display: "flex","justify-content": "space-between", "overflow": "auto",
  }}>
  
          {courses.map((course) => (
                 <div class="ganb" >
                <h2 className="create" align="center"><Link to={{pathname:course._id}}><h2>Title {course.title}</h2></Link></h2>
                <br/>
                <br/>
                <h2 align="center">Total Hours: {course.totalHours}</h2>
                <br/>
                <h2 align="center">Course Rating: {course.rating }</h2>
                {/* <div id="area" style={{textAlign:'left', padding:'40px', lineHeight:'30px'}}>jj{insertStars(course.rating)}</div> */}
                </div>
  
            ))}
  
  
  </div>           
  </div>     
  
   
)
}

export default DisplayCourses 

