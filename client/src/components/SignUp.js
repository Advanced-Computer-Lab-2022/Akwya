
import axios from 'axios';
// import react, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


  const { useState } = require("react");

  const Register = () => { 

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [gender,setGender] = useState('');
    
    const register =  async () => {
      await axios.post(`http://localhost:9000/trainee/signup`,{
        "username": username,
        "email": email,
        "password": password,
        "fname": fname,
        "lname": lname,
        "gender": gender
      })
      .then(
          (res) => {    
              console.log('REGISTERED!');
          }
           ); 
    }
    
return(

    <div className="Sign Up">
    <label>Username: </label>
      <input 
        type="text" 
        id="username"
        onChange={(e) => setUsername(e.target.value)} 
        value={username}
        required
      />
      <br/>
    <label>Email: </label>
      <input 
        type="text" 
        id="email"
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        required
      />
      <br/>
      <label>Password: </label>
      <input 
        type="text" 
        id="password"
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        required
      />
      <br/>
      <label>First Name: </label>
      <input 
        type="text" 
        id="fname"
        onChange={(e) => setFname(e.target.value)} 
        value={fname}
        required
      />
        
      <label>  Last Name: </label>
      <input 
        type="text" 
        id="lname"
        onChange={(e) => setLname(e.target.value)} 
        value={lname}
        required
      />
      <br/>
      <label>Gender: </label>
      <input 
        type="text" 
        id="gender"
        onChange={(e) => setGender(e.target.value)} 
        value={gender}
        required
      />
      <br/> <br/>

                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={register}
                margin="normal"
                padding="normal"
                >Submit</Button> 
                </Box>
                
       </div>

)
}
  export default Register;