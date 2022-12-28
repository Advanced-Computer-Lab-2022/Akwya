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

  

return(
    <div >
        <h1>My Courses</h1>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            {/* <StyledTableCell align="center">Progress</StyledTableCell> */}


          </TableRow>
        </TableHead>
        <TableBody>
            
          {courses.map((course) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
           
              >
              <TableCell align="center"><Link to={{pathname:course.CourseID}}><h2>{course.courseName}</h2></Link></TableCell>
              {/* <TableCell  align="center">{progress}</TableCell> */}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
        </div>
                
       // {courses.map(course => <li key={course._id}>Title: <Link to={{pathname:course._id}}><h2>{course.title}</h2></Link> Price: {(Math.round(course.price * rate) + ' ' + currency)}  Total Hours: {course.totalHours} Rating: {course.rating}</li>)}

           

        
        

   
)
}

export default MyCourses 

