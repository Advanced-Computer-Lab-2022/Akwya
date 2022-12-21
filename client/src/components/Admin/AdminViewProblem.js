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



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
 
const AdminViewProblems= () => { 
const [problems,setproblems] = useState([])
const temp =window.location.href.split('/').at(4)
const [hide,setHide] = useState('');




useEffect(()=>{

    axios
    .get('http://localhost:9000/course/getAllProblems')
    .then( res => {

        console.log(res)
        setproblems(res.data)
    })
    .catch(err=>{console.log(err)})
},[])




return( 


    <div>
        <h1>View Problems</h1>






        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">State</StyledTableCell>

           <StyledTableCell align="center">Problem</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Follow Up</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {problems.map((problem) => (
            
            // if (problem.status==='resolved') =>{
              
            
            
            <TableRow id = {problem._id}


            style={{backgroundColor:'red' , '':'white', borderRadius: '20px', padding: '20px'}}
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#ffffff",
                width: "100%"
                }
            }}
           
              >
               <TableCell>
                
               <h1 id={'Unresolved'+problem._id} >Unresolved</h1>

               <form>
               <input id={'pending'+problem._id}type="radio" name={problem._id} value="pending" onClick={() => {document.getElementById(problem._id).style.backgroundColor = "yellow" ; document.getElementById('Unresolved'+problem._id).style.display = "none" ;   document.getElementById('pending'+problem._id).style.display = "none"  
              ;

              const prob = {

                id:problem._id,
                status:'pending'
              };
          
               axios.post('/course/problemState', {prob}).then(res=>{
                Swal.fire({
                    title: 'Pending!',
                    icon: 'success',
                    confirmButtonColor: '#38a53e',
                    confirmButtonText: 'OK'
                  })
            }).catch(er=>{
                console.error(er);
            })
              
              }} /> pending<br/>
               <input id={'resolved'+problem._id} type="radio" name={problem._id} value="resolved" onClick={() => {document.getElementById(problem._id).style.backgroundColor = "green" ;document.getElementById('Unresolved'+problem._id).style.display = "none" ; document.getElementById('resolved'+problem._id).style.display = "none"  ;document.getElementById('pending'+problem._id).style.display = "none" 
                const prob = {

                  id:problem._id,
                  status:'resolved'
                };
            
                 axios.post('/course/problemState', {prob}).then(res=>{
                  Swal.fire({
                      title: 'Resolved!',
                      icon: 'success',
                      confirmButtonColor: '#38a53e',
                      confirmButtonText: 'OK'
                    })
              }).catch(er=>{
                  console.error(er);
              })
              ;
              } }/> resolved<br/>
               </form> 
              </TableCell> 

              
              <TableCell align="center">{problem.theProblem}</TableCell>
              <TableCell align="center">{problem.category}</TableCell>
              <TableCell align="center">{problem.status}</TableCell>
              <TableCell align="center" >{problem.followUps.map(followUp =><ul>{followUp}</ul>)}</TableCell>

            </TableRow>
            

            // }

            // else{
              
            // }



          ))
          
          
          }
        </TableBody>
      </Table>
    </TableContainer>
          
        </div>
                

           

        
        

   
)
}

export default AdminViewProblems 

