import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logout from './Logout';

const Navbar = () => {

  return (
<div >
    <header style={{borderBottom:" 3px solid black"}}>
    <a href="/" class="header-brand">Akwya</a>
    <nav>
      <div>
        <ul id="navPages">
            <li> <a href="/"> Home </a> </li>
            <li> <a href="/contact"> Contact Us </a> </li>
        </ul>
       
        </div>

        <Box id="logoutbutton" align="right" sx={{marginRight:4 }} hidden="true">
        <Button variant="contained" onClick={logout} margin="normal" padding="normal">Log Out</Button>
      </Box>
      <Box id="loginbutton" align="right" sx={{marginRight:4 }} hidden="true">
        <Button variant="contained" onClick={()=>{window.location = '/login'}} margin="normal" padding="normal">Log In</Button>
      </Box>
      
    </nav>
</header>


    {/* <header>
       <Link to="/">
        <h2  align="right" style={{  marginTop:"-20px",marginRight:"2px"}} sx={{marginRight:2 }}>Go To Home Page</h2>

      </Link>
      <div className="container" style={{background: "white",marginLeft:"200px",marginRight:"200px"}}>
          <h1>Akwya</h1>
          
       
      </div>

     

    </header> */}
    </div>
    
  )
}

export default Navbar