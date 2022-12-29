import { Link } from "react-router-dom";
import DataFetching from "../DataFetching";
import FilterFetching from "../components/user/FilterFetching";
import React, { useState, useEffect } from 'react';  

import UserSearchCourse from "../components/user/UserSearchCourse";

import FilterByRatingAndSubject from "../components/Instructor/FilterByRatingAndSubject";

const User = (props) => {
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = true
    document.getElementById('loginbutton').hidden = false
    document.getElementById('contract').hidden = true

    document.getElementById('navPages').innerHTML = '<li> <a href="/guest/0"> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'

    })
  return (
    <div>

    <section class="index-banner">
        <div class="vertical-center">
            <h2>AKWYA</h2>
            <h1 style={{fontSize:'30px'}}>Knowledge is power</h1><h1>Learn from the comfort of your device</h1>
        </div>
    </section>


    <div className="guest" style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
      
      {/* <h2>Guest Page</h2>
      <Link to="/">
      </Link> */}
      <UserSearchCourse />

      <DataFetching country={props.country} />
      {/* <FilterFetching country={props.country} />
      <FilterByRatingAndSubject country={props.country} /> */}
      {/* <Link to="/Policy">
        <h2>View Refund Policy</h2>
      </Link> */}
    </div>
    </div>
  );
};

export default User;
