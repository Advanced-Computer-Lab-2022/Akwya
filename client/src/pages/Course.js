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
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import reportAProblem2 from '../components/Problem/reportAProblem2'

const SideBar = props => {
  const sidebarClass = props.isOpen ? "0" : "-20vw";
  return (
    <div style={{"position": "fixed", "top": "160px", "right":sidebarClass, "height": "100%","width": "20vw", "transition": "right 0.3s ease-in-out", "background-color": "lightgray"}}>
      <div style={{ "text-align" : 'center' }}>
        <textarea rows="26" cols="32" style={{"font-size":"12pt"}}></textarea>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button class="btn" style={{"marginTop":"20px","background-color": "#1976d2",
         "border": "none", "color": "white", "padding": "12px", "cursor": "pointer", "font-size": "20px",  "border-radius":"5px"}}>
          <i class="fa fa-download"></i> Download</button>

      </div>
      <button onClick={props.toggleSidebar} className="sidebar-toggle" style={{"position": "absolute",  "top": "20%", 
      "left":" -80px", "height":"60px", "width": "80px", "z-index": "1", "background-color": "#1976d2",
      "border": "none", "color": "white", "padding": "12px", "cursor": "pointer", "font-size": "20px", "border-radius":"20px 0px 0px 20px"}}>
      Notes
      </button>
    </div>
  );
};

function Bar() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <span>
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </span>
  );
}
 

const Course = (props) => {
  const types = ["Course Details","Course Content"];
  const [active, setActive] = useState(types[0]);
  const [showContent, setshowContent] = useState(false);
  const [showDetails, setshowDetails] = useState(true);

  const [sidebarOpen, setSideBarOpen] = useState(false);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };



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



  function downloadTxtFile() {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('input').value],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
   
  }

    return (
      <div className="guest">
        <h2>Course Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <div>
         <input id="input" />
         <button onClick={downloadTxtFile}>Download</button>  
        </div>
<Bar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>

        <TabGroup/>

        <div style={{display: showContent ? 'block' : 'none' , "text-align" : 'center' }}><UserViewVideos/></div>
        <div style={{display: showDetails ? 'block' : 'none' }}><MyCourse country={props.country}/>

        <RateAndReviewCourse/>
        <RateAndReviewInstructor/>
        </div>

        


        <button onClick={reportAProblem2}>    
        Report a problem
          </button>

        

      </div>
    )
  }
  
  export default Course