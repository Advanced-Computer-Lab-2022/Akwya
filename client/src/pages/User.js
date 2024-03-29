import { Link } from "react-router-dom";
import DataFetching from "../DataFetching";
import FilterFetching from "../components/user/FilterFetching";

import UserSearchCourse from "../components/user/UserSearchCourse";
import ChangePw from "../components/Trainee/ChangePw";
import getWallet from "../components/Trainee/GetWallet";
import ViewMyProblems from '../components/Problem/viewMyProblems'

import FilterByRatingAndSubject from "../components/Instructor/FilterByRatingAndSubject";
import React, { useState, useEffect } from 'react';  
import styled from "styled-components";
import GetWallet from "../components/Trainee/GetWallet";
import MyCourses from "../components/user/MyCourses";

const User = (props) => {
  const types = ["Explore Courses", "My Courses", "Change Password","View Reported Problems"];

  const [active, setActive] = useState(types[0]);
  const [showMyCourses, setshowMyCourses] = useState(false);
  const [showCourses, setshowCourses] = useState(true);
  const [showPW, setshowPW] = useState(false);
  const [showProblems, setshowProblems] = useState(false);
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = false
    document.getElementById('loginbutton').hidden = true
    document.getElementById('contract').hidden = true
    document.getElementById('navPages').innerHTML = '<li> <a href="/user/'+window.location.href.split('/').at(4)+'"> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'

    })
  const Tab = styled.button`
    padding: 10px 100px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    transition: ease border-bottom 250ms;
    :hover {opacity: 1;  transition: ease opacity 300ms;}
    :not(:hover) {opacity: 0.6; transition: ease opacity 250ms;}
    ${({ active }) =>
      active &&
      `
    border-bottom: 3px solid black;
    opacity: 1;
  `}
  `;

  function TabGroup() {
    return (
      <>
        <div style={{ "text-align": "center" ,"width": "max-content"}}>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}

              onClick={() => {setActive(type);switch (type) {
                case "Explore Courses":
                  setshowCourses(true);
                  setshowMyCourses(false)
                  setshowPW(false)
                  setshowProblems(false)

                  
                break;
                case "My Courses":
                  setshowCourses(false);
                  setshowMyCourses(true)
                  setshowPW(false)
                  setshowProblems(false)

                  
                break;
                case "Change Password":
                  setshowCourses(false);
                  setshowMyCourses(false)
                  setshowPW(true)
                  setshowProblems(false)

                  
                  break;

                  case "View Reported Problems":
                  setshowCourses(false);
                  setshowMyCourses(false)
                  setshowPW(false)
                  setshowProblems(true)
                  
                  break;
          
                default:
                  break;
              }}}
            >
              {type}
            </Tab>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="user" style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
      {/* <h2>User Page</h2> */}
      <GetWallet />
      {/* <Link to="/">
      </Link> */}

      <TabGroup />


      <div class='admin allganb' style={{ display: showPW ? "block" : "none" , marginTop:'10px',paddingTop:'10px',height:'70vh',background:'rgb(240,240,240)'}}>
        <ChangePw  />
      </div>
      <div style={{ display: showCourses ? "block" : "none" }}>
        <UserSearchCourse country={props.country}/>
        <DataFetching country={props.country} />
      </div>
      <div style={{ display: showMyCourses ? "block" : "none" }}>
        <MyCourses/>
        {/* <FilterFetching country={props.country} />
        <FilterByRatingAndSubject country={props.country} /> */}
      </div>
      <div style={{display: showProblems ? 'block' : 'none' }}>
                <ViewMyProblems country={props.country}/>
      </div>


      {/* <Link to="/Policy">
        <h2>View Refund Policy</h2>
      </Link> */}
    </div>
  );
};

export default User;
