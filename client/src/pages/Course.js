import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import MyCourse from '../components/user/GetASingleCourse'
import ViewCourseRating from '../components/Instructor/ViewCourseRating'
import RateAndReviewCourse from '../components/user/RateAndReviewCourse'
import UserViewVideos from '../components/user/UserViewVideos'
import RateAndReviewInstructor from '../components/user/RateAndReviewInstructor'
import styled from "styled-components";
import React, { useState, useEffect } from 'react';  
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Notes from '../components/user/Notes.js'



import reportAProblem2 from '../components/Problem/reportAProblem2'

 

const Course = (props) => {
  const types = ["Course Details","Course Content"];
  const [active, setActive] = useState(types[0]);
  const [showContent, setshowContent] = useState(false);
  const [showDetails, setshowDetails] = useState(true);

  // const tempid = props.tempid
  // console.log('el7a20000ny plz')

  // console.log(tempid)


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
        <div style={{ "text-align" : 'center' }}>
          {types.map((type) => (
            <Tab 
              key={type}
              active={active === type}
              onClick={() => {setActive(type);switch (type) {
                case "Course Content":
                  setshowContent(true);
                  setshowDetails(false)
              
                break;
                case "Course Details":
                  setshowContent(false);
                  setshowDetails(true)                     
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

        <div style={{display: showContent ? 'block' : 'none' , "text-align" : 'center' }}><UserViewVideos/><Notes/></div>
        <div style={{display: showDetails ? 'block' : 'none' }}><MyCourse country={props.country}/>

        <RateAndReviewCourse/>
        <RateAndReviewInstructor/>
        </div>

        
        {/* onClick={() => begin(props)}
        <div style={{display: showPW ? 'block' : 'none' }}><ChangePw tid={props.tid}/></div> */}

        <button onClick={() => reportAProblem2(props.tempid)}>    

        {/* <button onClick={reportAProblem2 }>     */}
        Report a problem
        
          </button>

        

      </div>
    )
  }
  
  export default Course