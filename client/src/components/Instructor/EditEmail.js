
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

  const EditEmail = () => { 


    const params = new URLSearchParams(window.location.search);
    // const instructorId = params.get('id');
    const instructorId = '6381101753d48ea316365f94';
    // const instructorId = window.location.href.split('/').at(4);
    console.log(instructorId);

    const [instructors,setInstructors] = useState([]);
    const [email,setEmail] = useState('');


    const edit =  async () => {
        await axios.get(`http://localhost:9000/instructor/editEmail/`+instructorId  +'?email='+email ).then(
       (res) => { 
           const instructors = res.data
           console.log(instructors)
           setInstructors(instructors)
           
       }
        );
      
    }
return(


    <div className="Edit Email">



<label>Enter your new Email:</label>
      <input 
        type="text" 
        id="textbox"
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        required
      />
        
        
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={edit}
                margin="normal"
                padding="normal"
                >Edit My Email</Button> 
                
                </Box>


   
            
         <div> 
                   
         <div> 
                  
                  
       </div>

                  
       </div>


       </div>

)
   


  }
  export default  EditEmail;






