import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logout from './Logout';

const Navbar = () => {

  return (
    <header>
       <Link to="/">
        <h2  align="right" style={{  marginTop:"-20px",marginRight:"2px"}} sx={{marginRight:2 }}>Go To Home Page</h2>

      </Link>
      <div className="container" style={{background: "white",marginLeft:"200px",marginRight:"200px"}}>
          <h1>Akwya</h1>
          
        <Box id="logoutbutton" align="right" sx={{marginRight:2 }} hidden="true">
        <Button variant="contained" onClick={logout} margin="normal" padding="normal">Log Out</Button>
      </Box>
      <Box id="loginbutton" align="right" sx={{marginRight:2 }} hidden="true">
        <Button variant="contained" onClick={()=>{window.location = '/login'}} margin="normal" padding="normal">Log In</Button>
      </Box>
      </div>

     

    </header>

    
  )
}

export default Navbar