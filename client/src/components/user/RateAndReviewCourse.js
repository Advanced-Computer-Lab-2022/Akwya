
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
import react, {useState, useEffect} from 'react'


  const RateAndReviewCourse = () => { 



    const [rating,setRating] = useState(0);
    const [review,setReview] = useState("");
    const [Ratings,setRatings] = useState([]);
    const [registered,setRegistered] = useState([])
    const [error, setError] = useState(null)

    const CourseID  = window.location.href.split('/').at(5);
    const TraineeID = window.location.href.split('/').at(4);

    const PostRating =  async (e) => {
        e.preventDefault()

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
            //   window.location.reload();
            setRating(0);
            setReview("");
            }
          })


         
       
    }
    useEffect(()=>{
        axios
        .get(`http://localhost:9000/trainee/isRegistered/${CourseID}/${TraineeID}`)
        .then( res => {
            console.log(res)
            setRegistered(res.data)
        })
        .catch(err=>{console.log(err)})
    },[])
    
    console.log(JSON.stringify(registered).length+" hello")

    if(JSON.stringify(registered).length==2){
        console.log(JSON.stringify(registered).length)
        return; 
    }
return(


  <div class="courseDisplay2">
<form className="test" onSubmit={PostRating}> 
      <h1>Rate Course: </h1>

      <h3>Rating: </h3>
      <input 
        type="number" 
        onChange={(e) => setRating(e.target.value)} 
        value={rating}
        min = "0"
        max = "5"
        required
      />
        <br/>
      <h3>Review: </h3>
      <input 
        type="text" 
        onChange={(e) => setReview(e.target.value)} 
        value={review}
      required/>
        <br/>
      <button style={{"height": "50px",
    "border": "1px solid",
    "background": "#2691d9",
    "border-radius": "25px",
    "font-size": "18px",
    "color": "#e9f4fb",
    "font-weight": "700",
    "cursor": "pointer",
    "outline": "none","width":"150px",
    "marginTop":"20px"}}>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>



)
   


  }
  export default  RateAndReviewCourse;






