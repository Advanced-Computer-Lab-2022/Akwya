import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';  

const Home = () => {
  useEffect(()=>{
  document.getElementById('logoutbutton').hidden = true
  document.getElementById('loginbutton').hidden = true
  document.getElementById('contract').hidden = true

  })
  return (
    <div className="home" style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
      <h2>Home</h2>
      <Link to="/admin">
        <h2>Go to Admin Page</h2>
      </Link>
      <Link to="/signup">
        <h2>Sign Up as a Trainee</h2>
      </Link>
      <Link to="/login">
        <h2>Sign In</h2>
      </Link>
      <Link to="/user/639f8a0c5738de516fae13bf">
        <h2>Go to Individual Trainee Page</h2>
      </Link>
      <Link to="/userCorporate/639f8bd198df678643521246">
        <h2>Go to Corporate Trainee Page</h2>
      </Link>
      <Link to="/instructor/6381101753d48ea316365f94">
        <h2>Go to Instructor Page</h2>
      </Link>
      <Link to="/">
        <h2>Go to Guest Page</h2>
      </Link>
   
      
    </div>
  );
};

export default Home;
