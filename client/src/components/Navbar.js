import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logout from './Logout';

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Online Learning</h1>
        </Link>
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