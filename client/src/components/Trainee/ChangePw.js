
import axios from 'axios';
// import react, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


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

  const ChangePw = () => { 

    const params = new URLSearchParams(window.location.search);
    const traineeId = '63868a41143ffa7252ea011e';
    // const traineeId = window.location.href.split('/').at(4);

    console.log(traineeId);

    const [password,setPassword] = useState('');
    const [oldPassword,setOldPassword] = useState('');
    const [hide,setHide] = useState(true);
    const [hidec,setHidec] = useState(true);

    const checkOld =  async () => {
      await axios.get(`http://localhost:9000/trainee/checkPassword/`+traineeId).then(
          (res) => { 
            console.log('YASSS')     
            console.log(res.data);       
            console.log(res.data[0]);       

              if(res.data[0]['password'] == oldPassword) {
                setHide(true)
                setHidec(false)
                change()
              }else {
                setHidec(true)     
                setHide(false)
              }
          }
           );
        
         
    }
    const change = async () => {
      await axios.get(`http://localhost:9000/trainee/changePassword/`+traineeId +'?password='+password).then(
       (res) => { 
        console.log('changed pw')           
       }
        );
        
    }
    
return(


    <div className="Edit Password">
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
  export default ChangePw;