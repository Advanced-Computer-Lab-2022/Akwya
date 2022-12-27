// this data fetching is for the indiviudal trainee

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import certificate from '../../img/Certificate.pdf'

function UserViewVideos() {
const [videos,setVideos] = useState([])
const [userProgress,setUserProgress] = useState(0)
const [videoCount,setVideoCount] = useState(0)
const [preview,setPreview] = useState([])
const [registered,setRegistered] = useState([])
const [show, setShow] = useState(false)
const [showProgress, setShowProgress] = useState(false)


const CourseID = window.location.href.split('/').at(5);
const TraineeID = window.location.href.split('/').at(4);


function downloadCertificate() {
   
    let alink = document.createElement('a');
    alink.href = certificate;
    alink.download = 'Certificate.pdf';
    alink.click();

}

  
const Progressbar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '89%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50,
        border: '3px solid black',

      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right',
        borderBottom: '1px solid black',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        transition: 'ease-in width 8000ms',
        marginLeft: '-1px'
    }
      const ChildEmpty = {
        height: '100%',
        width: `3%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right',
        borderBottom: '1px solid black',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        transition: 'ease-in width 8000ms',
        marginLeft: '-1px'

    }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }

      if(progress==0){
        return(
            <div style={Parentdiv}>
              <div style={ChildEmpty}>
                <span style={progresstext}>{`${progress}%`}</span>
              </div>
            </div>
            )
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}



useEffect(()=>{
    axios
    .get(`http://localhost:9000/trainee/getUserProgress/${TraineeID}/${CourseID}`)
    .then( res => {
        console.log(JSON.stringify(res)+" daaaaa")
        if(res.data!=null)
            setUserProgress(res.data)
            if(res.data==100)
                setShow(true);
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

<Progressbar bgcolor="#1976d2" progress={userProgress}  height={20} />

    <div  style={{"text-align" : 'center' }}>
       <h2>Your Progress is {userProgress}%</h2><div><div style={{display: show ? 'block' : 'none' }}><Box sx={{marginBottom: 2,marginLeft: 2 ,display:"inline"}}>
                <Button variant="contained"
                onClick={downloadCertificate}
                margin="normal"
                padding="normal"
                >Download Certificate </Button> 
                
                </Box>
                </div>
</div>
        
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
          }).then( async (result)  =>  {
            if (result.isConfirmed) {
                setShowProgress(!showProgress);
                
                const respnse= await fetch(`http://localhost:9000/trainee/getUserProgress/${TraineeID}/${CourseID}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                const json= await respnse.json()
                setUserProgress(json)
                
                if(!respnse.ok){
                    console.log(json.error)
                }
                if(respnse.ok){
                    console.log("this should be 100: "+json)
                    if(json==100){
                        const respnsee= await fetch(`http://localhost:9000/trainee/sendCertificate/${TraineeID}/${CourseID}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type' : 'application/json'
                            }
                        })
                        const jsonn= await respnsee.json()
                    if(!respnsee.ok){
                        console.log(jsonn.error)
                    }
                    if(respnsee.ok){
                        Swal.fire({
                            title: 'Congrats!',
                            text:'You just completed 100% of this course, an email has been sent to you with the certificate ',
                            icon: 'success',
                            confirmButtonColor: '#1976d2',
                            confirmButtonText: 'Download Certificate',
                            showCancelButton: true,
                            cancelButtonText: 'Close'
                            }).then((result) => {
                            if (result.isConfirmed) {
                                console.log("downloading....")
                                downloadCertificate();
                            }
                          })
                    }

                    }           
                }    
                
            }
          })  
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

