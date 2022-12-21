
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

  const ChangePassword = () => { 

    const params = new URLSearchParams(window.location.search);
    // const instructorId = '6380fada0e91fe67a1baf48a';
    //EL SAH:
    const instructorId = window.location.href.split('/').at(4);

    console.log(instructorId);

    const [password,setPassword] = useState('');
    const [oldPassword,setOldPassword] = useState('');
    const [hide,setHide] = useState(true);
    const [hidec,setHidec] = useState(true);
    
    const checkOld =  async () => {
      await axios.get(`http://localhost:9000/instructor/checkPassword/`+instructorId).then(
          (res) => {    
              if(res.data[0]['password'] == oldPassword) {
                console.log('dakhal check pw w sah')          
                setHide(true)
                setHidec(false)
                change()
              }else {
                console.log('dakhal check pw w ghalat')     
                setHidec(true)     
                setHide(false)

              }
          }
           );
        
         
    }
    const change = async () => {
      await axios.get(`http://localhost:9000/instructor/changePassword/`+instructorId +'?password='+password).then(
       (res) => { 
        console.log('changed pw')           
       }
        );
        
    }
    
return(


    <div className="Edit Password" style={{lineHeight: "40px"}}>
         <label>Enter your old Password:</label>
      <input 
        type="text" 
        id="textbox"
        onChange={(e) => setOldPassword(e.target.value)} 
        value={oldPassword}
        required
      />
      <br/>
    <label>Enter your new Password:</label>
      <input 
        type="text" 
        id="textbox"
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        required
      />
      
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={checkOld}
                margin="normal"
                padding="normal"
                >Change Password</Button> 
                </Box>
                <div hidden={hide}><h5>Old password is incorrect</h5></div>
                <div hidden={hidec}><h4>Password changed successfully</h4></div>


       </div>

)
   


}
  export default ChangePassword;






