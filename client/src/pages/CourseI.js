import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import MyCourseI from '../components/Instructor/GetASingleCourse'
import AddVideo from '../components/Instructor/AddVideo'
import ViewVideos from '../components/Instructor/ViewVideos'
import ViewCourseRating from '../components/Instructor/ViewCourseRating'
import Discount from '../components/Instructor/Discount'
import styled from "styled-components";
import React, { useState, useEffect } from 'react';  
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

 

import reportAProblem2 from '../components/Problem/reportAProblem2'

const Course = (props) => {
  const types = ["Show Course Content","Manage Course Content"];
  const [active, setActive] = useState(types[0]);
  const [showControls, setshowControls] = useState(false);
  const [showCourse, setshowCourse] = useState(true);

  const _idInstructor = window.location.href.split('/').at(4);
  const _idCourse = window.location.href.split('/').at(5);

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
      <div className="guest" style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
        <h2>Course Page</h2>
        

        
        <TabGroup/>

        <div style={{display: showCourse ? 'block' : 'none' }}><MyCourseI country={props.country}/><ViewVideos/></div>
        <div style={{display: showControls ? 'block' : 'none'}}>
          <div style={{display:'flex'}}>
          <AddVideo/><Discount/>
          </div>
        
        <div>
        <ViewCourseRating/>

        <Box sx={{marginBottom: 2}}>
        <Link to={{pathname:"/instructor/"+_idInstructor+"/"+_idCourse+"/Quiz"}}>
                <Button variant="contained"
                margin="normal"
                padding="normal"
                >Create A Quiz</Button> 
                

          </Link>
          </Box>

        </div>

          </div>
        

          <button style={{ width:'150px', fontSize:'18px', fontWeight:'700', color:'white',  borderRadius: '25px',   background: '#2691d9' }} onClick={() => reportAProblem2(props.tempid)}>    
        Report a problem
          </button>


         
      </div>
    )
  }


  //


  
  export default Course