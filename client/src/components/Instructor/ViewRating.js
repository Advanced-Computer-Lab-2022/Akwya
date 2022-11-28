
import axios from 'axios';
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
import react, {useEffect} from 'react'





const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const { useState } = require("react");

  const ViewRating = () => { 


    const params = new URLSearchParams(window.location.search);
    // const instructorId = params.get('id');
    const instructorId = '6381101753d48ea316365f94';
    console.log(instructorId);


    const [RateAndReview,setRateAndReview] = useState([]);

    const CourseID  = window.location.href.split('/').at(5);


  const [instructor,setInstructor] = useState([])
    
  const instructorID = '6381101753d48ea316365f94';




    const getRatings =  async () => {
        await axios.get(`http://localhost:9000/instructor/${instructorID}/myRating`).then(
       (res) => { 
           const RateAndReview = res.data
           console.log(RateAndReview)
           setRateAndReview(RateAndReview)
           
       }
        );
      
    }


return(


    <div className="View Ratings">
        <h3>viewProfile</h3>
        
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={getRatings}
                margin="normal"
                padding="normal"
                >View My Ratings & Reviews</Button> 
                
                </Box>
            
         <div> 
                   
         <div> 
                  {RateAndReview.map((inst) => (
                  <div > <p>{inst.ratings.map((instt) => (<div><p>Rating: {instt.rate}, Review: {instt.review}</p></div>))}</p></div>
                    ))}
                  
       </div>

                  
       </div>


       </div>

)
   


  }
  export default  ViewRating;






