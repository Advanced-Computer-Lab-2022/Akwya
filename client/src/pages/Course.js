import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import MyCourse from '../components/user/GetASingleCourse'
import ViewCourseRating from '../components/Instructor/ViewCourseRating'
import RateAndReviewCourse from '../components/user/RateAndReviewCourse'
import UserViewVideos from '../components/user/UserViewVideos'
import RateAndReviewInstructor from '../components/user/RateAndReviewInstructor'
import React, { useState } from "react";
import styled from "styled-components";

const Course = (props) => {
  const types = ["Course Details","Course Content"];
  const [active, setActive] = useState(types[0]);
  const [showContent, setshowContent] = useState(false);
  const [showDetails, setshowDetails] = useState(true);



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

        <div style={{display: showContent ? 'block' : 'none' , "text-align" : 'center' }}><UserViewVideos/></div>
        <div style={{display: showDetails ? 'block' : 'none' }}><MyCourse country={props.country}/>
        <RateAndReviewCourse/>
        <RateAndReviewInstructor/>
        </div>

        


        

      </div>
    )
  }
  
  export default Course