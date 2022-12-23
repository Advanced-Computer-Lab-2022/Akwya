
// import axios from 'axios';
// // import react, {useState, useEffect} from 'react'
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Swal from "sweetalert2";



//   const { useState } = require("react");

//   const Refund = () => { 

  

//     const [username,setUsername] = useState('');
//     const [amount,setAmount] = useState(0);
   
    
//     const refund =  async () => {
//       await axios.get(`http://localhost:9000/admin/refundTrainee/?username=`+username+`&amount=`+amount).then(
//           (res) => {   
//             Swal.fire({
//               title: 'Refund successful!',
//               icon: 'success',
//               confirmButtonColor: '#38a53e',
//               confirmButtonText: 'OK'
//             })  
//           }
//            );
   
//     }
    
// return(

// <div class="cent">
//     <div className="Refund">
//        <h1>Refund to Trainee</h1> 
//        <div class="txt_field">

//       <input 
//         type="text" 
//         id="idtextbox"
//         onChange={(e) => setUsername(e.target.value)} 
//         value={username}
//         required
//       />
//       <label>Trainee's Username</label>

//       </div>
//       <div class="txt_field">
   
//       <input 
//         type="text" 
//         id="reftextbox"
//         onChange={(e) => setAmount(e.target.value)} 
//         value={amount}
//         required
//       />
//        <label>Refund amount</label>
//       </div>
      
//                 <Box sx={{marginBottom: 2}}>
//                 <Button variant="contained"
//                 onClick={refund}
//                 margin="normal"
//                 padding="normal"
//                 >Refund</Button> 
//                 </Box>


//        </div>
// </div>
// )
// }
//   export default Refund;






