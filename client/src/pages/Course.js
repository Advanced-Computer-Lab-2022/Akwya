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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Notes from '../components/user/Notes.js'
import '../backButton.css'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from 'axios';




import reportAProblem2 from '../components/Problem/reportAProblem2'

 

const Course = (props) => {
  
  const types = ["Course Details","Course Content"];
  const [active, setActive] = useState(types[0]);
  const [showContent, setshowContent] = useState(false);
  const [showDetails, setshowDetails] = useState(true);
  const [registered,setRegistered] = useState([])
  const CourseID  = window.location.href.split('/').at(5);
  const TraineeID = window.location.href.split('/').at(4);
  const type=window.location.href.split('/').at(3)+'/';
  const backLink = "http://localhost:3000/"+type+TraineeID;
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = false
    document.getElementById('loginbutton').hidden = true
    document.getElementById('contract').hidden = true
    document.getElementById('navPages').innerHTML = '<li> <a href=/user/'+TraineeID+'> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'

    })
  useEffect(()=>{
    axios
    .get(`http://localhost:9000/trainee/isRegistered/${CourseID}/${TraineeID}`)
    .then( res => {
        console.log(res)
        setRegistered(res.data)
    })
    .catch(err=>{console.log(err)})
},[])



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
  
  
  if(JSON.stringify(registered).length==2){
    return(
      <div className="guest" style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
          <div class="bb"><a href={backLink} class="previous round">&#8249;</a></div>

      <TabGroup/>
      

      <div style={{display: showContent ? 'block' : 'none' , "text-align" : 'center' }}><UserViewVideos/><Notes/></div>
      <div style={{display: showDetails ? 'block' : 'none' }}><MyCourse country={props.country}/>
      </div>

      
      {/* onClick={() => begin(props)}
      <div style={{display: showPW ? 'block' : 'none' }}><ChangePw tid={props.tid}/></div> */}
<Box sx={{marginBottom: 5}}>
                      <Button variant="contained"
                      margin="normal"
                      padding="normal"
                      onClick={() => reportAProblem2(props.tempid)}
                      >Report a problem !</Button> 
                      
                      </Box>
      {/* <button onClick={() => reportAProblem2(props.tempid)}>    

      Report a problem
      
        </button> */}

      

    </div>
  )

  }
  
  return (
    <div className="guest" style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>       
    <div class="bb"><a href={backLink} class="previous round">&#8249;</a></div>
       
        <TabGroup/>
        

        <div style={{display: showContent ? 'block' : 'none' , "text-align" : 'center' }}><UserViewVideos/><Notes/></div>
        <div style={{display: showDetails ? 'block' : 'none' }}><MyCourse country={props.country}/>
        <div style={{"display": "flex","margin": "50px","background": "white","justify-content": "space-around",
    "border-radius": "10px","padding": "30px","padding-bottom": "50px"}}>
        <RateAndReviewCourse/>
        <RateAndReviewInstructor/>
        </div>
        </div>

        
        {/* onClick={() => begin(props)}
        <div style={{display: showPW ? 'block' : 'none' }}><ChangePw tid={props.tid}/></div> */}
<br/>
        <button style={{ width:'200px', height:'50px',fontSize:'18px', fontWeight:'700', color:'white',  borderRadius: '25px',   background: '#2691d9' }} onClick={() => reportAProblem2(props.tempid)}>    


        Report a problem
        
          </button> 

 

        

      </div>
    )
  }
  
  export default Course