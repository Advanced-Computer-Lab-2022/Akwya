import React, { useState, useEffect } from 'react';  
import { Link } from "react-router-dom";
import ViewMyCourses from "../components/MyCourses.js";
import CreateACourse from "../components/Instructor/CreateCourse.js";
import SearchACourse from "../components/Instructor/SearchCourse.js";
import DataFetching from "../DataFetching";
import FilterFetching from "../components/user/FilterFetching.js";
import FilterFetchingI from "../components/Instructor/FilterFetchingI.js";
import FilterFetchingISubject from "../components/Instructor/FilterFetchingISubject.js";

import UserSearchCourse from "../components/user/UserSearchCourse";

import FilterByRatingAndSubject from "../components/Instructor/FilterByRatingAndSubject.js";
import ChangePassword from "../components/Instructor/ChangePassword.js";
import styled from "styled-components";
 
import  ViewEmail from '../components/Instructor/ViewEmail.js'
import  EditEmail from '../components/Instructor/EditEmail.js'
import ViewRating from '../components/Instructor/ViewRating'
import  EditBio from '../components/Instructor/EditBio.js'
import ViewMyProblems from '../components/Problem/viewMyProblems'
//profit
 import Profit from '../components/Instructor/MoneyOwed';



const Instructor = (props) => {
  const types = ["My Courses","My Info","Explore Courses","View Reported Problems"];
  const [active, setActive] = useState(types[0]);
  const [showFilters, setshowFilters] = useState(false);
  const [showCourses, setshowCourses] = useState(false);
  const [showInfo, setshowInfo] = useState(false);
  const [showMyCourses, setshowMyCourses] = useState(true);
  const [showProblems, setshowProblems] = useState(false);
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = false
    document.getElementById('loginbutton').hidden = true
    document.getElementById('contract').hidden = false

    document.getElementById('navPages').innerHTML = '<li> <a href="/instructor/'+window.location.href.split('/').at(4)+'"> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'
    })
  const Tab = styled.button`
    padding: 10px 80px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    transition: ease border-bottom 5000ms;
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
        <div style={{ "text-align": "center", position: "relative" }}>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}

              onClick={() => {setActive(type);switch (type) {
                case "Explore Courses":
                  setshowCourses(true);
                  setshowFilters(false)
                  setshowMyCourses(false)
                  setshowInfo(false)    
                  setshowProblems(false)
              
                break;
                case "Filter Courses":
                  setshowCourses(false);
                  setshowFilters(true)
                  setshowMyCourses(false)
                  setshowInfo(false)     
                  setshowProblems(false)
                
                break;
                case "My Courses":
                  setshowCourses(false);
                  setshowFilters(false)
                  setshowMyCourses(true)
                  setshowInfo(false)       
                  setshowProblems(false)
              
                  break;
                  case "My Info":
                    setshowCourses(false);
                    setshowFilters(false)
                    setshowMyCourses(false)
                    setshowInfo(true)     
                    setshowProblems(false)
                  
                    break;


                    case "View Reported Problems":
                    setshowCourses(false);
                    setshowFilters(false)
                    setshowMyCourses(false)
                    setshowInfo(false)     
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
        <br />
      </>
    );
  }

  return (
    <div style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
      <div className="instructor">

        {/* <h2>Instructor Page</h2> */}
        {/* <Link to="/">
          <h2>Go to Home Page</h2>
        </Link> */}

        <TabGroup />

        <div style={{ display: showCourses ? "block" : "none" }}>
          <UserSearchCourse country={props.country} />
          <DataFetching country={props.country} />
        </div>

        <div style={{ display: showMyCourses ? "block" : "none" }}>
          
          <br/>
          <SearchACourse country={props.country}/>
          <ViewMyCourses />
          <CreateACourse /> 
          {/* <FilterFetchingI country={props.country} />
          <FilterFetchingISubject country={props.country} /> */}
        </div>

        {/*       <div style={{display: showInfo ? 'block' : 'none' }}><Link to="/ViewProfileInstructor/6381101753d48ea316365f94">
          <h3>View My Profile</h3>
       </Link> */}
        <div class="admin" style={{ display: showInfo ? "block" : "none", height:'140vh', background:'rgb(240,240,240)'}}>
        <div class="allganb">
          <EditBio />        
          <EditEmail />
          
          <ChangePassword />
          
          </div>
          
          <ViewRating />
          <Profit/>
        
        </div>

        <div style={{ display: showFilters ? "block" : "none" }}>
          {/* <FilterFetching country={props.country} />
          <FilterByRatingAndSubject country={props.country} /> */}
        </div>

        <div style={{display: showProblems ? 'block' : 'none' }}><ViewMyProblems  country={props.country}/>
        </div>

      </div>

    </div>
  );
};

export default Instructor;
