
import axios from 'axios';
// import react, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



  const { useState } = require("react");

  const Refund = () => { 

  

    const [traineeID,setTraineeID] = useState('');
    const [amount,setAmount] = useState(0);
   
    
    const refund =  async () => {
      await axios.get(`http://localhost:9000/admin/refundTrainee/`+traineeID+`?amount=`+amount).then(
          (res) => {    
          }
           );
   
    }
    
return(


    <div className="Refund">
       <h3>Refund to Trainee</h3> 
         <label>Enter trainee's ID: </label>
      <input 
        type="text" 
        id="idtextbox"
        onChange={(e) => setTraineeID(e.target.value)} 
        value={traineeID}
        required
      />
      <br/>
    <label>Enter refund amount: </label>
      <input 
        type="text" 
        id="reftextbox"
        onChange={(e) => setAmount(e.target.value)} 
        value={amount}
        required
      />
      
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={refund}
                margin="normal"
                padding="normal"
                >Refund</Button> 
                </Box>


       </div>

)
   


}
  export default Refund;






