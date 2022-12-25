// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function UserViewVideos() {
const [videos,setVideos] = useState([])
const [userProgress,setUserProgress] = useState(0)
const [videoCount,setVideoCount] = useState(0)
const [preview,setPreview] = useState([])
const [registered,setRegistered] = useState([])
const [error, setError] = useState(null)
const [showProgress, setShowProgress] = useState(false)


const CourseID = window.location.href.split('/').at(5);
const TraineeID = window.location.href.split('/').at(4);

useEffect(()=>{
    axios
    .get(`http://localhost:9000/trainee/getUserProgress/${TraineeID}/${CourseID}`)
    .then( res => {
        console.log(JSON.stringify(res)+" daaaaa")
        if(res.data!=null)
            setUserProgress(res.data)
    })
    .catch(err=>{console.log(err)})
},[showProgress])

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


useEffect(()=>{
    axios
    .get(`http://localhost:9000/trainee/isRegistered/${CourseID}/${TraineeID}`)
    .then( res => {
        console.log(res)
        setRegistered(res.data)
    })
    .catch(err=>{console.log(err)})
},[])


// const handleSubmit2 = async (e) => {
//     e.preventDefault()

//     const id = window.location.href.split('/').at(5);
//     const respnse= await fetch(`http://localhost:9000/trainee/drop/${CourseID}/${TraineeID}`, {
//         method: 'GET',
//     })  
//     const json= await respnse.json()

//     if(!respnse.ok){
//         setError(json.error)
//     }
//     if(respnse.ok){
//         console.log("Course Successfully Dropped!")
//         Swal.fire({
//             title: 'Course Successfully Dropped!',
//             icon: 'success',
//             confirmButtonColor: '#38a53e',
//             confirmButtonText: 'OK'
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 window.location.reload();
//             }
//           })  
//         setError(null)
//     } 
// }


// const handleSubmit = async (e) => {
//     e.preventDefault()

//     const id = window.location.href.split('/').at(5);
//     const respnse= await fetch(`http://localhost:9000/trainee/register/${CourseID}/${TraineeID}`, {
//         method: 'GET',
//     })  
//     const json= await respnse.json()

//     if(!respnse.ok){
//         setError(json.error)
//     }
//     if(respnse.ok){
//         console.log("Course Successfully Registered!")
//         Swal.fire({
//             title: 'Course Successfully Registered!',
//             icon: 'success',
//             confirmButtonColor: '#38a53e',
//             confirmButtonText: 'OK'
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 window.location.reload();
//             }
//           })  
//         setError(null)
//     } 
// }


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

if(JSON.stringify(registered).length==2){
    // console.log(JSON.stringify(instructor).length+" instructor ");
    // console.log(instructorID+" instructor id from url");
    
    return (
        <div style={{ "text-align" : 'left' }}>

       


            <h1>Course Content</h1>
            <ul>
            {preview.map(video => <div><h1>Preview: </h1><iframe width="700" height="350" src={'https://www.youtube.com/embed/'+video.previewVideo.split('=').at(1)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <br/></div>)}
    
                {/* {videos.map(video => <li key={video._id}>Title: {video.title} Price: {(Math.round(video.price * rate) + ' ' + currency)} Total Hours: {video.totalHours} Rating: {video.rating} Summary: {video.summary}</li>)} */}
                {videos.map(video => <div><h1>{video.title}:</h1><h3>Total Hours: {video.totalHours}</h3>
                <br/><small>summary: {video.summary}</small></div>)}
               
    
                
    
            </ul>
            
    
        </div>
    )
}


return(
    <div style={{ "text-align" : 'left' }}>

    <div  style={{"text-align" : 'center' }}>
       <h2>Your Progress is {userProgress}%</h2>
        
    </div>


        <h1>Course Content</h1>
        <ul>
        {preview.map(video => <div><h1>Preview: </h1><iframe width="700" height="350" src={'https://www.youtube.com/embed/'+video.previewVideo.split('=').at(1)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br/></div>)}

            {/* {videos.map(video => <li key={video._id}>Title: {video.title} Price: {(Math.round(video.price * rate) + ' ' + currency)} Total Hours: {video.totalHours} Rating: {video.rating} Summary: {video.summary}</li>)} */}
            {videos.map(video => <div><h1>{video.title}:</h1><h3>Total Hours: {video.totalHours}</h3><div><iframe id={video._id}  width="700" height="350" src={'https://www.youtube.com/embed/'+video.url.split('=').at(1)} title={video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <Box sx={{ marginBottom: 2, marginLeft:"245px",marginTop:"15px" }}>
        <Button
          variant="contained"
          onClick={ async () => {console.log("This is the Video ID: "+video._id);
          const respnse= await fetch(`http://localhost:9000/trainee/userWatchVideo/${TraineeID}/${video._id}`, {
        method: 'GET',
    })  
    const json= await respnse.json()
    if(!respnse.ok){
        Swal.fire({
            title: 'Video Already Completed Before',
            icon: 'info',
            confirmButtonColor: '#1976d2',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
            }
          })
    }
    if(respnse.ok){
        Swal.fire({
            title: 'Video Successfully Completed!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                setShowProgress(!showProgress);
            }
          })  
        setError(null)
    } 

        }}
          margin="normal"
          padding="normal"
        >
          completed The Video
        </Button>
      </Box></div>
            <br/><small>summary: {video.summary}</small></div>)}
           

            

        </ul>

        
        
<div style={{ "text-align" : 'center' }}>
        <Link to={{pathname:"/user/"+TraineeID+"/"+CourseID+"/TakeQuiz"}}>
        <Box sx={{marginBottom: 5}}>
                <Button variant="contained"
                margin="normal"
                padding="normal"
                >Take A Quiz</Button> 
                
                </Box>
          </Link>
          </div>

    </div>
)
}

export default UserViewVideos 

