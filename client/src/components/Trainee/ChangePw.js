
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
    // const traineeId = '63868a41143ffa7252ea011e';
  
    const traineeId = window.location.href.split('/').at(4);

    const [password,setPassword] = useState('');
    const [oldPassword,setOldPassword] = useState('');
    const [hide,setHide] = useState(true);
    const [hidec,setHidec] = useState(true);

    const checkOld =  async () => {
      await axios.get(`http://localhost:9000/trainee/checkPassword/`+traineeId).then(
          (res) => { 
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


<div class="ganb"> 
<form className="create">
<h1>Password</h1>
<div class="txt_field">

      <input 
        type="password" 
        id="textbox"
        onChange={(e) => setOldPassword(e.target.value)} 
        value={oldPassword}
        required
      />
      <br/>
      <label>Old Password</label>

      </div>
      <div class="txt_field">

      <input 
        type="password" 
        id="textbox"
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        required
      />
          <label>New Password</label>
          </div>

   
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={checkOld}
                margin="normal"
                class="button"
                padding="normal"
                >Change</Button> 
                </Box>
                <div hidden={hide}><h3 style={{color:'red', fontSize:'12px'}}>Old password is incorrect</h3></div>
                <div hidden={hidec}><h4>Password changed successfully</h4></div>
                </form>
                </div>


)
}
  export default ChangePw;