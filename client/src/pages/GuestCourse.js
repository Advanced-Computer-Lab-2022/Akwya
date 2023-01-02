import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import styled from "styled-components";
import React, { useState, useEffect } from 'react';  
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Notes from '../components/user/Notes.js'
import GuestCourse from '../components/GuestGetASingleCourse'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from 'axios';
import GuestViewVideos from '../components/GuestViewVideos'

 

const CourseG = (props) => {
    useEffect(()=>{
        document.getElementById('logoutbutton').hidden = true
        document.getElementById('loginbutton').hidden = false
        document.getElementById('contract').hidden = true
        document.getElementById('navPages').innerHTML = '<li> <a href=/> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'
    
        })
  const types = ["Course Details","Course Content"];
  const [active, setActive] = useState(types[0]);
  const [showContent, setshowContent] = useState(false);
  const [showDetails, setshowDetails] = useState(true);
  const [registered,setRegistered] = useState([])

  const CourseID  = window.location.href.split('/').at(3);



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
  
    return(
      <div className="guest" style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
   
      <TabGroup/>
      

      <div style={{display: showContent ? 'block' : 'none' , "text-align" : 'center' }}><GuestViewVideos/></div>
      <div style={{display: showDetails ? 'block' : 'none' }}><GuestCourse usertype='guest' country={props.country}/>
      </div>

    
    </div>
  )

  
    
  }
  
  export default CourseG