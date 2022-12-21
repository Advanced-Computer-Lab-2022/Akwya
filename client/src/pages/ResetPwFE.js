
import axios from 'axios';
// import react, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Swal from "sweetalert2";
import useEffect from 'react';  


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
   
    const [mail,setMail] = useState('');
    
    const reset =  async () => {
      await axios.get(`http://localhost:9000/trainee/resetPassword/?mail=`+mail).then(
          (res) => {
                Swal.fire({
                  title: "Success!<br/>Check your email",
                  icon: "success",
                  confirmButtonColor: "#38a53e",
                  confirmButtonText: "OK",
                })
          }
           ).catch((error)=>{
            Swal.fire({
              title: "Error!<br/>Retype your email or<br/>check Internet Connection",
              icon: "error",
              confirmButtonColor: "#990000",
              confirmButtonText: "Try Again",
            })
           });
    }
    
return(

     <div class="login">
  <div class="center">
<h1>Reset Password</h1>
<form method="post">
  <div class="txt_field">
    <input type="text"
     id="mail"
     onChange={(e) => setMail(e.target.value)}
     value={mail} 
    required/>
    <span></span>
    <label>Email</label>
  </div>
  
  <Box sx={{ marginBottom: 2 }}>
  <Button
    variant="contained"
    onClick={reset}
    margin="normal"
    padding="normal"
  >
    Reset
  </Button>
</Box>
  <div class="signup_link">
    Remember? <a href="/login">Login</a>
  </div>
</form>
</div>
</div>
)

}
  export default ResetMail;






