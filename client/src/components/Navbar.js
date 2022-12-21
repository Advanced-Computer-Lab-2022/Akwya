import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logout from './Logout';
import CountryDropdown from 'country-dropdown-with-flags-for-react';  
import React, { useState, useEffect } from 'react';  

const Navbar = () => {
  const [country, setCountry] = useState('')
  const handleCountry = (e) => {
    setCountry(e.target.value);
  }

  return (
    <header>
      <CountryDropdown  id="UNIQUE_ID" preferredCountries={['gb', 'us','eg']}  value="" handleChange={e => {handleCountry(e)}}></CountryDropdown>   
     
      <div className="container">
        <Link to="/">
          <h1>Online Learning</h1>
        </Link>
        <Box id="logoutbutton" align="right" sx={{ marginBottom: 2, marginRight:2 }} hidden="true">
        <Button variant="contained" onClick={logout} margin="normal" padding="normal">Log Out</Button>
      </Box>
      </div>
    </header>
  )
}

export default Navbar