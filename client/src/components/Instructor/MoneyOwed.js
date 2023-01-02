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
import Swal from "sweetalert2";

const { useState, useEffect } = require("react");
// const params = new URLSearchParams(window.location.search);
// const instructorId = params.get('id');





const Profit = () => {
  const [money,setMoney] = useState(0);
  
  const instructorId = window.location.href.split('/').at(4);

  const click=()=>{Swal.fire({
    title: ' Your Monthly Profit is ' +money,
    icon: 'success',
    confirmButtonColor: '#38a53e',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  }) 

  }
  useEffect(()=>{
    axios.get(`http://localhost:9000/instructor/moneyOwed/`+instructorId).then(
 (res) => { 
    
     setMoney(res.data)
     
        console.log("profit")
    
         
     
 
        });
},[money]) 

return(


    <div className="money">


        
                <Box sx={{marginBottom: 2,marginLeft: 5,display:"inline"}}>
                <Button variant="contained"
                onClick={click}
                margin="normal"
                padding="normal"
                >View my profit</Button> 

                
                </Box>

       

       </div>

)
   


  }

export default Profit