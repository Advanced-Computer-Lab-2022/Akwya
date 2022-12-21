
import axios from 'axios';
// import react, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Swal from "sweetalert2";
import useEffect from 'react';  
import { red } from '@mui/material/colors';
import '../login.css'

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

  const Refund = () => { 
   

    const [username,setUsername] = useState('');
    const [amount,setAmount] = useState(0);
   
    
    const refund =  async () => {
      await axios.get(`http://localhost:9000/admin/refundTrainee/?username=`+username+`&amount=`+amount).then(
          (res) => {   
            Swal.fire({
              title: 'Refund successful!',
              icon: 'success',
              confirmButtonColor: '#38a53e',
              confirmButtonText: 'OK'
            })  
          }
          ).catch((error)=>{
            Swal.fire({
              title: "Incorrect Username",
              icon: "error",
              confirmButtonColor: "#990000",
              confirmButtonText: "Try Again",
            })
           });
   
    }
    
return(

     <div class="login">
  <div class="center">
<h1>Refund Trainee</h1>
<form method="post">
  <div class="txt_field">
    <input type="text"
     id="username"
     onChange={(e) => setUsername(e.target.value)}
     value={username} 
    required/>
    <span></span>
    <label>Username</label>
  </div>
  <div class="txt_field">
    <input type="text"
     id="amount"
     onChange={(e) => setAmount(e.target.value)}
     value={amount} 
    required/>
    <span></span>
    <label>Amount</label>
  </div>
  <Box sx={{ marginBottom: 2,marginTop: 2 }}>
  <Button
    variant="contained"
    onClick={refund}
    margin="normal"
    padding="normal"
  >
    Refund
  </Button>
</Box>
<Box sx={{ marginBottom: 4,marginTop: 2}}>

<Button class="cancel"
    variant="contained"
    onClick={()=>{
       window.location=document.referrer
    }}
    margin="normal"
    padding="normal" 
  >
    CANCEL
  </Button>
  </Box>

</form>
</div>
</div>
)

}
  export default Refund;






