
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

  const EditBio = () => { 


    const params = new URLSearchParams(window.location.search);
    // const instructorId = params.get('id');
    const instructorId = '6381101753d48ea316365f94';
    // const instructorId = window.location.href.split('/').at(4);
    console.log(instructorId);

    const [instructors,setInstructors] = useState([]);
    const [ minibiography,setMinibiography] = useState('');


    const edit =  async () => {
        await axios.get(`http://localhost:9000/instructor/editBio/`+instructorId +'?minibiography='+ minibiography ).then(
       (res) => { 
           const instructors = res.data
           console.log(instructors)
           setInstructors(instructors)
           
       }
        );
      
    }
return(


    <div className="Edit bio">


<label>Enter Your Biography:</label>
      <input 
        type="text" 
        id="bio"
        onChange={(e) => setMinibiography(e.target.value)} 
        value={ minibiography}
        required
      />
        
        
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={edit}
                margin="normal"
                padding="normal"
                >Update Your Minibiography</Button> 
                
                </Box>


    
    
            
         <div> 
        { minibiography}
         <div> 
                  
                  
       </div>

                  
       </div>


       </div>

)
   


  }
  export default  EditBio;






