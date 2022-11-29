
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
    // const instructorId = '6380fada0e91fe67a1baf48a';
    //EL SAH:
    // const instructorId = window.location.href.split('/').at(4);

    // console.log(instructorId);
    const [mail,setMail] = useState('');
    // const [password,setPassword] = useState('');
    // const [oldPassword,setOldPassword] = useState('');
    const [hide,setHide] = useState(true);
    const [hidec,setHidec] = useState(true);
    
    const reset =  async () => {
      await axios.get(`http://localhost:9000/instructor/resetPassword/?mail=`+mail).then(
          (res) => {    
            console.log(res.statusCode)
            console.log("HENAA")
            console.log(res)
            console.log(res.status)


            //   if(res.) {
            //     console.log('dakhal check pw w sah')          
            //     setHide(true)
            //     setHidec(false)
            //     change()
            //   }else {
            //     console.log('dakhal check pw w ghalat')     
            //     setHidec(true)     
            //     setHide(false)

            //   }
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
                <div hidden={hide}><h5>Mail does not exist</h5></div>
                <div hidden={hidec}><h4>Success! Check your mail</h4></div>


       </div>

)
   


}
  export default ResetMail;






