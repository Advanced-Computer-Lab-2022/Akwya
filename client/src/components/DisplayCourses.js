
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import card from '../DataFetching';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// // const card = (
// //   <React.Fragment>
// //     <CardContent>
  
// //       <Typography variant="h5" component="div">
// //       <DataFetching/>
// //       </Typography>
// //       <Typography sx={{ mb: 1.5 }} color="text.secondary">
// //         CSEN704
// //       </Typography>
// //       <Typography variant="body2">
// //         Price: 20LE  -hard coded
// //         <br />
// //         Subject: Computer Science
// //       </Typography>
// //     </CardContent>
// //     <CardActions>
// //       <Button size="small">learn More</Button>
// //     </CardActions>
// //   </React.Fragment>
// // );

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }

// // const DisplayCourses = ()=> {

// //     const Coursenames = ['Course 1', 'Course 2', 'Course 3']

// //     return (
// //       <div>
// //        Explore Courses
// //         <ul>
// //           {Coursenames.map((Coursename) => (
// //             <li>{Coursename}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// // }
// // export default DisplayCourses

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function DataFetching() {
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
    <div>
        <h1>Explore Courses</h1>
        <ul>
            {courses.map(course => <li key={course.id}><Link to={{pathname:course._id}}><h2>{course.title}</h2></Link>Title:   Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
           
        </ul>
    </div>
)
}

export default DataFetching 

