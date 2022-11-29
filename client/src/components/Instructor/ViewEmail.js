
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

  const ViewEmail = () => { 


    const params = new URLSearchParams(window.location.search);
    // const instructorId = params.get('id');
    const instructorId = '6380fada0e91fe67a1baf48a';
    console.log(instructorId);

    const [instructors,setInstructors] = useState([]);


    const getEmail =  async () => {
        await axios.get(`http://localhost:9000/instructor/viewEmail/`+instructorId).then(
       (res) => { 
           const instructors = res.data
           console.log(instructors)
           setInstructors(instructors)
           
       }
        );
      
    }
return(


    <div className="View Email">
        <h3>viewProfile</h3>
        
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={getEmail}
                margin="normal"
                padding="normal"
                >View My Email</Button> 
                
                </Box>
            
         <div> 
                   
         <div> 
                  {instructors.map((inst) => (
                  <div > <p>{inst.email}</p></div>
                    ))}
                  
       </div>

                  
       </div>


       </div>

)
   


  }
  export default  ViewEmail;






