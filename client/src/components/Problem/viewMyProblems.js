// this data fetching is for the indiviudal trainee

import React, {useState, useEffect} from 'react'
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
import Swal from "sweetalert2";
import styles from './reportAProblem.css'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
 
const ViewMyProblems= () => { 
const [problems,setproblems] = useState([])
const temp =window.location.href.split('/').at(4)




useEffect(()=>{

    axios
    .get('http://localhost:9000/course/getProblems/'+temp)
    .then( res => {

        console.log(res)
        setproblems(res.data)
    })
    .catch(err=>{console.log(err)})
},[])





const followup= (props) => { 

  Swal.fire({
    title: "Follow Up!",
    text: "Let us know how can we help you",
    input: 'text',
    showCancelButton: true,
    closeOnConfirm: true,
    animation: "slide-from-top",
    inputPlaceholder: "Please include as much info as possible..."
  }).then(async(result) =>{
    if (result.isConfirmed) {

if (result.value=='') {
  // Swal.showValidationMessage('First input missing')

  Swal.fire({
    title: 'Missing input!',
    confirmButtonText: 'OK'
  })
} 
      else {
          

    const prob = {

      id:props,
      input:result.value+'   ',
    };

    await axios.post('/course/followUp', {prob}).then(res=>{
      Swal.fire({
          title: 'FollowUp Submitted!',
          icon: 'success',
          confirmButtonColor: '#38a53e',
          confirmButtonText: 'OK'
        })
  }).catch(er=>{
      console.error(er);
  })
      }


  
    }
});
      

}
  

return( 
    <div>
        <h1>View Problems</h1>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">Course Name</StyledTableCell>
           <StyledTableCell align="center">Problem</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
            <StyledTableCell align="center">Admin Messages</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {problems.map((problem) => (
            <TableRow style={{boxShadow:"100px 20px 1000px purple" ,backgroundColor:'white',borderWidth:'20px',borderColor:'green' , '':'white', borderRadius: '20px', padding: '20px'}}
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
              >           
               <TableCell align="center">{problem.coursename}</TableCell>          
              <TableCell align="center">{problem.theProblem}</TableCell>
              <TableCell align="center">{problem.category}</TableCell>
              <TableCell align="center">{problem.status}</TableCell>
                <div> {problem.status==="resolved" ? <p></p>:
              <TableCell align="center" >

 <Button variant="contained" style={{padding:5 ,cursor: "pointer", backgroundColor:'purple'}} onClick={() => followup(problem._id)}>follow up</Button>
              </TableCell>
              
}
                </div>
                <TableCell align="center">{problem.messages}</TableCell>
           

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
        </div>
                

           

        
        

   
)
}

export default ViewMyProblems 

