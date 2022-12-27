
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>




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
    // const instructorId = '6381101753d48ea316365f94';


    const [RateAndReview,setRateAndReview] = useState([]);

    const CourseID  = window.location.href.split('/').at(5);


  const [instructor,setInstructor] = useState([])
  const instructorID = window.location.href.split('/').at(4);

  // const instructorID = '6381101753d48ea316365f94';


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

    // const getRatings =  async () => {
      useEffect(()=>{
        // await
        axios.get(`http://localhost:9000/instructor/${instructorID}/myRating`).then(
       (res) => { 
           setRateAndReview(res.data)
          
       }
        );
       
    },[instructor])


return(


    <div className="View Ratings">
        
                {/* <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={getRatings}
                margin="normal"
                padding="normal"
                >View My Ratings & Reviews</Button> 
                
                </Box> */}
            
         <div class="ganb" style={{marginLeft:'80px'}}> 
                   <h1>My Ratings</h1>
         <div id="area" style={{textAlign:'left', padding:'40px', lineHeight:'30px'}}> 
                  {RateAndReview.map((inst) => (  insertStars(inst.ratings)
                  // <div > <p>{inst.ratings.map((instt) => 
                  //   (
                    // <div ><p>Rating: {instt.rate}, Review: {instt.review}</p> 
                    // </div>
                    // ))}</p></div>
                    ))}
                  
       </div>

                  
       </div>


       </div>

)
   


  }
  export default  ViewRating;






