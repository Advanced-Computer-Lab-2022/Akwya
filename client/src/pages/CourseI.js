import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import MyCourseI from '../components/Instructor/GetASingleCourse'
import AddVideo from '../components/Instructor/AddVideo'
import ViewVideos from '../components/Instructor/ViewVideos'
import ViewCourseRating from '../components/Instructor/ViewCourseRating'
import Discount from '../components/Instructor/Discount'
import React, { useState } from "react";
import styled from "styled-components";


import reportAProblem2 from '../components/Problem/reportAProblem2'

const Course = (props) => {
  const types = ["Show Course Content","Manage Course Content"];
  const [active, setActive] = useState(types[0]);
  const [showControls, setshowControls] = useState(false);
  const [showCourse, setshowCourse] = useState(true);



  const Tab = styled.button`
  
  padding: 10px 100px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  
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
        <div style={{ "text-align" : 'center' }}>
          {types.map((type) => (
            <Tab 
              key={type}
              active={active === type}
              onClick={() => {setActive(type);switch (type) {
                case "Manage Course Content":
                  setshowControls(true);
                  setshowCourse(false)
              
                break;
                case "Show Course Content":
                  setshowControls(false);
                  setshowCourse(true)                     
                break;
                default:
                  break;
              }}}
            >
              {type}
            </Tab>
          ))}
        </div>
        <br/>

      </>
    );
  }




    return (
      <div className="guest">
        <h2>Course Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>

        </Link>

        
        <TabGroup/>

        <div style={{display: showCourse ? 'block' : 'none' }}><MyCourseI country={props.country}/><ViewVideos/></div>
        <div style={{display: showControls ? 'block' : 'none' }}><AddVideo/><Discount/><ViewCourseRating/></div>



        


        
        

        

        <button onClick={() => reportAProblem2(props.tempid)}>    
        Report a problem
          </button>


         
      </div>
    )
  }


  //


  
  export default Course