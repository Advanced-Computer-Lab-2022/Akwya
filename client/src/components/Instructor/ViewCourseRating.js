
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

  const ViewCourseRating = () => { 

    const [empty,setEmpty] = useState(false);


    const params = new URLSearchParams(window.location.search);
    // const instructorId = params.get('id');
    const instructorId = '6380fada0e91fe67a1baf48a';
    console.log(instructorId);


    const [RateAndReview,setRateAndReview] = useState([]);

    const CourseID  = window.location.href.split('/').at(5);


  const [instructor,setInstructor] = useState([])
    
  const ID = window.location.href.split('/').at(5);
  const instructorID = window.location.href.split('/').at(4);

  useEffect(()=>{
    axios
    .get(`http://localhost:9000/instructor/CanViewVideos/${ID}/${instructorID}`)
    .then( res => {
        console.log(res)
        setInstructor(res.data)
    })
    .catch(err=>{console.log(err)})
},[])




    const getRatings =  async () => {
        await axios.get(`http://localhost:9000/instructor/getRatings/${CourseID}`).then(
       (res) => { 
           const RateAndReview = res.data
           console.log(RateAndReview)
           setRateAndReview(RateAndReview)
           RateAndReview.map((instr)=>{if(instr.noOfRatings.length==0){
            setEmpty(true);
           }})
          
           
           
       }
        );
      
    }


    if(JSON.stringify(instructor).length==2){
        // console.log(JSON.stringify(instructor).length+" instructor ");
        // console.log(instructorID+" instructor id from url");
        
        return;
    }
return(


    <div className="View Ratings">
        <h3>viewProfile</h3>
        
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={getRatings}
                margin="normal"
                padding="normal"
                >View Course Ratings & Reviews</Button> 
                
                </Box>
            
         <div> 
                   
         <div> 
                  {RateAndReview.map((inst) => (
                  <div > <p>{inst.noOfRatings.map((instt) => (<div><p>Rating: {instt.rate}, Review: {instt.review}</p></div>))}</p></div>
                    ))}
                  
       </div>
       <div style={{display: empty ? 'block' : 'none' }}>
        <h2>There are no Ratings And Reviews yet</h2>
       </div>

                  
       </div>


       </div>

)
   


  }
  export default  ViewCourseRating;






