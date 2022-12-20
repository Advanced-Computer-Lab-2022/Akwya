import axios from "axios";
// import react, {useState, useEffect} from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";

const { useState } = require("react");

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const logint = async () => {
    try {
    await axios
      .post(`http://localhost:9000/instructor/signin`, {
        username: username,
        password: password
      })
      .then((res) => {
        console.log(res);

            //check
            // window.location = '/instructor/'+res.data._id;
            
            window.location = '/instructor/6381101753d48ea316365f94';

      });
    }catch(error){
      console.log(error);

        Swal.fire({
            title: "Incorrect email or password",
            icon: "error",
            confirmButtonColor: "#990000",
            confirmButtonText: "Try again",
          })
    }
  };

  return (
    <div className="Log In">
      <label>Username: </label>
      <input
        type="text"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        required
      />      
      <br />
      <label>Password: </label>
      <input
        type="text"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      
      <br /> <br />
      <Box sx={{ marginBottom: 2 }}>
        <Button
          variant="contained"
          onClick={logint}
          margin="normal"
          padding="normal"
        >
          Log In
        </Button>
      </Box>
    </div>
  );
};
export default SignIn;
