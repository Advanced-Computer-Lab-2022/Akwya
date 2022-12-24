import { Link } from 'react-router-dom'
import DisplayCourses from '../components/DisplayCourses'
import FilterByRatingAndSubject from '../components/Instructor/FilterByRatingAndSubject'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import SearchCourseCorporate from '../components/user/SearchCourseCorporate'
import ChangePw from '../components/Trainee/ChangePw'
import React, { useState, useEffect } from 'react';  
import styled from "styled-components";
import ViewMyProblems from '../components/Problem/viewMyProblems'


const User = (props) => {
  const types = ["Explore Courses", "Filter Courses", "Change Password","View Reported Problems"];
  const [active, setActive] = useState(types[0]);
  const [showFilters, setshowFilters] = useState(false);
  const [showCourses, setshowCourses] = useState(true);
  const [showPW, setshowPW] = useState(false);
  const [showProblems, setshowProblems] = useState(false);
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = false
    document.getElementById('loginbutton').hidden = true
    document.getElementById('contract').hidden = true

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
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

  function TabGroup() {

    


  


    return (
      <>
        <div style={{ "text-align" : 'center' }} >
          {types.map((type) => (
            <Tab 
              key={type}
              active={active === type}
              onClick={() => {setActive(type);switch (type) {
                case "Explore Courses":
                  setshowCourses(true);
                  setshowFilters(false)
                  setshowPW(false)
                  setshowProblems(false)

                  
                break;
                case "Filter Courses":
                  setshowCourses(false);
                  setshowFilters(true)
                  setshowPW(false)
                  setshowProblems(false)

                  
                break;
                case "Change Password":
                  setshowCourses(false);
                  setshowFilters(false)
                  setshowPW(true)
                  setshowProblems(false)

                  
                  break;

                  case "View Reported Problems":
                  setshowCourses(false);
                  setshowFilters(false)
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
        <h2>User Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        
        <TabGroup/>

        <div style={{display: showPW ? 'block' : 'none' }}><ChangePw /></div>

        <div style={{display: showCourses ? 'block' : 'none' }}><SearchCourseCorporate/><DisplayCourses/></div>
       <div style={{display: showFilters ? 'block' : 'none' }}><FilterByRatingAndSubject/></div>         
       <div style={{display: showProblems ? 'block' : 'none' }}><ViewMyProblems country={props.country}/></div>

      </div>
    )
  }
  
  export default User