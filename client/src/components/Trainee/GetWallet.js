import axios from 'axios';
import React, { useState, useEffect } from 'react';  


  const GetWallet = () => { 

    const params = new URLSearchParams(window.location.search);
    const traineeId = window.location.href.split('/').at(4);

    const [wallet,setWallet] = useState('');
    useEffect(()=>{
    // const getWallet =  async () => {
       axios.get(`http://localhost:9000/trainee/getWallet/`+traineeId).then(
          (res) => {    
             setWallet(res.data['wallet']);
              }
           );
          },[])
    return(
        <div align="right">
         <h4>£ {wallet}</h4>
       </div>
    )
    }
      export default GetWallet;