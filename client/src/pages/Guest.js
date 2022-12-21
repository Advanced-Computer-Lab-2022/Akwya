import { Link } from "react-router-dom";
import DataFetching from "../DataFetching";
import FilterFetching from "../components/user/FilterFetching";
import React, { useState, useEffect } from 'react';  

import UserSearchCourse from "../components/user/UserSearchCourse";

import FilterByRatingAndSubject from "../components/Instructor/FilterByRatingAndSubject";

const User = (props) => {
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = true
    })
  return (
    <div className="guest">
      <h2>Guest Page</h2>
      <Link to="/">
        <h2>Go to Home Page</h2>
      </Link>
      <UserSearchCourse />

      <DataFetching country={props.country} />
      <FilterFetching country={props.country} />
      <FilterByRatingAndSubject country={props.country} />
      <Link to="/Policy">
        <h2>View Refund Policy</h2>
      </Link>
    </div>
  );
};

export default User;
