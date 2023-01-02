import react, {useState, useEffect} from 'react'




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
import { Link } from "react-router-dom";
import Course from '../../pages/Course';




//






const RefundRequests = (props) => {
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = false
    document.getElementById('loginbutton').hidden = true
    document.getElementById('contract').hidden = true
    document.getElementById('navPages').innerHTML = '<li> <a href="/admin/"> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'
  
    })

    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
       
    //   function Courses(props) {
      const [requests,setRequests] = useState([])
      
      
      
      useEffect(()=>{
          axios
          .get('http://localhost:9000/admin/viewRefunds/')
          .then( res => {
              console.log(res)
              setRequests(res.data)
          })
          .catch(err=>{console.log(err)})
      },[])
      
        let rate = 1;
        let currency = 'GBP'
        switch(props.country) {
            case 'United States':
              rate = 1.15;
              currency = 'USD';
              break;
            case 'Egypt (‫مصر‬‎)':
            // case 'Egypt':
              rate=27.85;
              currency = 'EGP';
              break;
            default:
              // rate = 3;
          }
        // }





    const [admin,setAdmin] = useState('');
    const [price,setPrice]=useState(0);
    const [promotion, setPromotion]=useState(0);

    const [promotionExpiry, setPromotionExpiry]=useState('');
    
//    const courseId="6383d865be115422d0801584";
//    const courseId="6383df27b650efbcb7dc74a1"; //promotion 0
 
   const handleAccess =async (TraineeID,CourseID) =>{
    await axios.get(`http://localhost:9000/trainee/refund/${TraineeID}/${CourseID}`).then(
        (res) => {   
            Swal.fire({
                title: 'Refund Successfull!',
                icon: 'success',
                confirmButtonColor: '#38a53e',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              }) 

   })

   }

   if(JSON.stringify(requests).length==2){
    return(
        <div style={{"background":"white","padding":"10px","borderRadius":"10px",marginTop:"30px"}}>
            <div style={{marginLeft:"20px",marginRight:"20px"}}>
        <h2>There are currently no Refund Requests.</h2>
        <Link to="/admin">
        <h2>Back</h2>
      </Link>
      </div>
        </div>
    )

}
 
return(

<div style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px",marginTop:"30px"}}>

<Link to="/admin">
        <h2>Back</h2>
      </Link>

          


            <h1>Refund Requests</h1>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Course</StyledTableCell>
            <StyledTableCell align="center">Refund Amount</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          


          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((request) => (
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
              <TableCell align="center"><h2>{request.username}</h2></TableCell>
              <TableCell align="center"><h2>{request.courseName}</h2></TableCell>
              <TableCell align="center"><h2>{request.price}</h2></TableCell>
              <TableCell align="center"><Box sx={{marginBottom: 2,marginLeft: 2 ,display:"inline"}}>
                        <Button variant="contained"
                    
                    onClick={()=>handleAccess(request.TraineeID,request.CourseID)}
                        margin="normal"
                        padding="normal"
                        >confirm </Button> 
                        
                        </Box>     </TableCell>
              {/* <TableCell align="center">{course.totalHours}</TableCell>
              <TableCell align="center">{course.rating}</TableCell> */}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





            </div>

        )
           
             
    
    }
    export default RefundRequests;
