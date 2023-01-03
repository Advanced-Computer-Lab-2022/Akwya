// this data fetching is for the indiviudal trainee

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function GuestViewVideos() {
const [videos,setVideos] = useState([])
const [userProgress,setUserProgress] = useState(0)
const [videoCount,setVideoCount] = useState(0)
const [preview,setPreview] = useState([])
const [registered,setRegistered] = useState([])
const [show, setShow] = useState(false)
const [showProgress, setShowProgress] = useState(false)


const CourseID = window.location.href.split('/').at(3);




// console.log(ID)
useEffect(()=>{
    axios
    .get(`http://localhost:9000/instructor/viewVideos/${CourseID}`)
    .then( res => {
        console.log(res)
        setVideos(res.data)
    })
    .catch(err=>{console.log(err)})
},[])


useEffect(()=>{
    axios
    .get(`http://localhost:9000/instructor/viewPreview/${CourseID}`)
    .then( res => {
        console.log(res)
        setPreview(res.data)
    })
    .catch(err=>{console.log(err)})
},[])

//code for trying to call function on iframe click

// main document must be focused in order for window blur to fire when the iframe is interacted with. 
// There's still an issue that if user interacts outside of the page and then click iframe first without clicking page, the following logic won't run. But since the OP is only concerned about first click this shouldn't be a problem.
window.focus()

window.addEventListener("blur", () => {
  setTimeout(() => {
    if (document.activeElement.tagName === "IFRAME") {
      console.log(document.activeElement);
    }
  });
}, { once: true });

    // console.log(JSON.stringify(instructor).length+" instructor ");
    // console.log(instructorID+" instructor id from url");
    
    return (
        <div style={{ "text-align" : 'left' }}>

       


            <h1>Course Content</h1>
            <ul>
            {preview.map(video => <div><h1>Preview: </h1><iframe width="700" height="350" src={'https://www.youtube.com/embed/'+video.previewVideo.split('=').at(1)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <br/></div>)}
    
                {/* {videos.map(video => <li key={video._id}>Title: {video.title} Price: {(Math.round(video.price * rate) + ' ' + currency)} Total Hours: {video.totalHours} Rating: {video.rating} Summary: {video.summary}</li>)} */}
                {videos.map(video => <div style={{"background": "white",
    "padding": "20px",
    "padding-left": "100px",
    "margin": "10px",
    "marginTop":"50px",
    "border-radius": "20px"}}><h1>{video.title}:</h1><h3>Total Hours: {video.totalHours}</h3>
                <br/><small>summary: {video.summary}</small></div>)}
               
    
                
    
            </ul>
            
    
        </div>
    )
}

export default GuestViewVideos 

