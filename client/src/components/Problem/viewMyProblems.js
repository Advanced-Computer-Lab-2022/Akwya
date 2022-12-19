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



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
 
const ViewMyProblems= (props) => { 
const [problems,setproblems] = useState([])
const temp = props.tempid
console.log('ssd'+temp)


useEffect(()=>{
    axios
    .get('http://localhost:9000/course/getProblems/'+temp)
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
           <StyledTableCell align="center">Problem</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Follow Up</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {problems.map((problem) => (
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
              <TableCell align="center"><Link to={{pathname:problem._id}}><h2>{problem.theProblem}</h2></Link></TableCell>
              <TableCell align="center">{problem.category}</TableCell>
              <TableCell align="center">{problem.status}</TableCell>
              {/* <TableCell align="center">{problem.status}</TableCell> */}
              <input 
        type="text" 
        
      />


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
        </div>
                

           

        
        

   
)
}

export default ViewMyProblems 

