import axios from "axios";
// import react, {useState, useEffect} from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";

const { useState } = require("react");

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const login = async () => {
    try {
    await axios
      .post(`http://localhost:9000/trainee/login`, {
        username: username,
        password: password
      })
      .then((res) => {
      if(res.data.type=='individual'){
        window.location = "/user/"+res.data.user._id;
      }
      else if(res.data.type=='corporate'){
        window.location = "/userCorporate/"+res.data.user._id;
      }
      else if(res.data.type=='instructor'){
        window.location = "/instructor/"+res.data.user._id;
      }

      });
    }catch(error){
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
          onClick={login}
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
