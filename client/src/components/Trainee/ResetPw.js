
import axios from 'axios';
// import react, {useState, useEffect} from 'react'
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

  const ResetMail = () => { 

    const params = new URLSearchParams(window.location.search);
 
    const [mail,setMail] = useState('');
    const [hide,setHide] = useState(true);
    const [hidec,setHidec] = useState(true);
    
    const reset =  async () => {
      await axios.get(`http://localhost:9000/trainee/resetPassword/?mail=`+mail).then(
          (res) => {    
              if(res.status==200) {
                setHide(true)
                setHidec(false)
             
              }else {
                setHidec(true)     
                setHide(false)
              }
          }
           );
    }
    
return(


    <div className="Reset Password">
         <label>Enter your mail:</label>
      <input 
        type="text" 
        id="textbox"
        onChange={(e) => setMail(e.target.value)} 
        value={mail}
        required
      />
      <br/>
    
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={reset}
                margin="normal"
                padding="normal"
                >Reset</Button> 
                </Box>
                <div hidden={hide}><h5>Error or mail does not exist</h5></div>
                <div hidden={hidec}><h4>Success! Check your mail</h4></div>


       </div>

)
   


}
  export default ResetMail;






