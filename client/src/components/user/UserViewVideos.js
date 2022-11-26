// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from "sweetalert2";

function UserViewVideos() {
const [videos,setVideos] = useState([])
const [preview,setPreview] = useState([])
const [registered,setRegistered] = useState([])
const [error, setError] = useState(null)


const CourseID = window.location.href.split('/').at(4);
const TraineeID = "635849b7a58d8beb73e81787";

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


const handleSubmit2 = async (e) => {
    e.preventDefault()

    const id = window.location.href.split('/').at(5);
    const respnse= await fetch(`http://localhost:9000/trainee/drop/${CourseID}/${TraineeID}`, {
        method: 'GET',
    })  
    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("Course Successfully Dropped!")
        Swal.fire({
            title: 'Course Successfully Dropped!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })  
        setError(null)
    } 
}


const handleSubmit = async (e) => {
    e.preventDefault()

    const id = window.location.href.split('/').at(5);
    const respnse= await fetch(`http://localhost:9000/trainee/register/${CourseID}/${TraineeID}`, {
        method: 'GET',
    })  
    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("Course Successfully Registered!")
        Swal.fire({
            title: 'Course Successfully Registered!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })  
        setError(null)
    } 
}


if(JSON.stringify(registered).length==2){
    // console.log(JSON.stringify(instructor).length+" instructor ");
    // console.log(instructorID+" instructor id from url");
    
    return (
        <div>

        <form className="create" onSubmit={handleSubmit}> 
            <h3>Add/Drop The Course</h3>
            <button>Add Course</button>
            {error && <div className="error">{error}</div>}
        </form>
        <form className="create" onSubmit={handleSubmit2}> 
          <button>Drop Course</button>
          {error && <div className="error">{error}</div>}
        </form>


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
    <div>

        <form className="create" onSubmit={handleSubmit}> 
            <h3>Add/Drop The Course</h3>
            <button>Add Course</button>
            {error && <div className="error">{error}</div>}
        </form>
        <form className="create" onSubmit={handleSubmit2}> 
          <button>Drop Course</button>
          {error && <div className="error">{error}</div>}
        </form>


        <h1>Course Content</h1>
        <ul>
        {preview.map(video => <div><h1>Preview: </h1><iframe width="700" height="350" src={'https://www.youtube.com/embed/'+video.previewVideo.split('=').at(1)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br/></div>)}

            {/* {videos.map(video => <li key={video._id}>Title: {video.title} Price: {(Math.round(video.price * rate) + ' ' + currency)} Total Hours: {video.totalHours} Rating: {video.rating} Summary: {video.summary}</li>)} */}
            {videos.map(video => <div><h1>{video.title}:</h1><h3>Total Hours: {video.totalHours}</h3><iframe width="700" height="350" src={'https://www.youtube.com/embed/'+video.url.split('=').at(1)} title={video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br/><small>summary: {video.summary}</small></div>)}
           

            

        </ul>
        

    </div>
)
}

export default UserViewVideos 

