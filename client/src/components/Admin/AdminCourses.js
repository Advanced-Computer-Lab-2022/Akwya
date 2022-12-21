// // this data fetching is for the indiviudal trainee

// import react, {useState, useEffect} from 'react'
// import axios from 'axios'

// import { Link } from 'react-router-dom'
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';  
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// import Courses from '../components/Admin/AdminCourses'

// //async

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));
 
// function Courses(props) {
// const [courses,setCourses] = useState([])


// useEffect(()=>{
//     axios
//     .get('http://localhost:9000/course/')
//     .then( res => {
//         console.log(res)
//         setCourses(res.data)
//     })
//     .catch(err=>{console.log(err)})
// },[])

//   let rate = 1;
//   let currency = 'GBP'
//   switch(props.country) {
//       case 'United States':
//         rate = 1.15;
//         currency = 'USD';
//         break;
//       case 'Egypt (‫مصر‬‎)':
//       // case 'Egypt':
//         rate=27.85;
//         currency = 'EGP';
//         break;
//       default:
//         // rate = 3;
//     }
  

// return(
//     <div>
//         <h1>Courses</h1>
        
//         <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="center">Title</StyledTableCell>
//             <StyledTableCell align="center">Price</StyledTableCell>
          


//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {courses.map((course) => (
//             <TableRow
//             hover
//             sx={{
//                 "&:hover":{
//                 cursor: "pointer",
//                 backgroundColor: "#f5f5f5",
//                 width: "100%"
//                 }
//             }}
           
//               >
//               <TableCell align="center"><Link to={{pathname:course._id}}><h2>{course.title}</h2></Link></TableCell>
//               <TableCell align="center">{(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)}</TableCell>
//               <TableCell align="center"><Box sx={{marginBottom: 2,marginLeft: 2 ,display:"inline"}}>
//                         <Button variant="contained"
                    
//                         // onClick={ifPromotionFound(course._id)}
//                         margin="normal"
//                         padding="normal"
//                         >confirm </Button> 
                        
//                         </Box>     </TableCell>
//               {/* <TableCell align="center">{course.totalHours}</TableCell>
//               <TableCell align="center">{course.rating}</TableCell> */}

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
          
//         </div>
                
//        // {courses.map(course => <li key={course._id}>Title: <Link to={{pathname:course._id}}><h2>{course.title}</h2></Link> Price: {(Math.round(course.price * rate) + ' ' + currency)}  Total Hours: {course.totalHours} Rating: {course.rating}</li>)}

           

        
        

   
// )
// }

// export default Courses;

