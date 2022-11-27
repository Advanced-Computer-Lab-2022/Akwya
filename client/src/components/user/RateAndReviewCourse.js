
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
import Swal from "sweetalert2";





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

  const RateAndReviewCourse = () => { 


    const params = new URLSearchParams(window.location.search);
    // const instructorId = params.get('id');
    const instructorId = '6380fada0e91fe67a1baf48a';
    console.log(instructorId);

    const [rating,setRating] = useState(0);
    const [review,setReview] = useState("");
    const [Ratings,setRatings] = useState([]);
    const [error, setError] = useState(null)

    const CourseID  = window.location.href.split('/').at(4);

    const PostRating =  async () => {
        await axios.patch(`http://localhost:9000/trainee/${CourseID}/rateCourse?rating=${rating}&review=${review}`).then(
       (res) => { 
           const Ratings = res.data
           console.log(Ratings)
           setRatings(Ratings)
           
           
       }
       
        );

        Swal.fire({
            title: 'Rating & Review added!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })
      
    }
return(


    <div className="Rate">

<form className="create" onSubmit={PostRating}> 
      <h3>Rate this course: </h3>

      <label>Rating: </label>
      <input 
        type="number" 
        onChange={(e) => setRating(e.target.value)} 
        value={rating}
        min = "0"
        max = "5"
        required
      />
        <br/>
      <label>Review: </label>
      <input 
        type="text" 
        onChange={(e) => setReview(e.target.value)} 
        value={review}
      required/>
        <br/>
      <button>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
       


       </div>

)
   


  }
  export default  RateAndReviewCourse;






