import axios from 'axios';
// import react, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';  
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';



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

  const GetWallet = () => { 

    const params = new URLSearchParams(window.location.search);
    const traineeId = window.location.href.split('/').at(4);

    const [wallet,setWallet] = useState('');
    
    const getWallet =  async () => {
      await axios.get(`http://localhost:9000/trainee/getWallet/`+traineeId).then(
          (res) => {    
             setWallet(res.data['wallet']);

              }
           );
         
    }
    return(
        <div align="right">
        <Button variant="contained"
                onClick={getWallet}
                margin="normal"
                padding="normal"
                align="right"
                >View Wallet</Button> 
                <div>
                <h4>$ {wallet}</h4>
                </div>
                </div>
    )
    }
      export default GetWallet;