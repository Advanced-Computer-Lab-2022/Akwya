// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'

function ViewVideos() {
const [videos,setVideos] = useState([])
const [preview,setPreview] = useState([])

const [instructor,setInstructor] = useState([])
    
const ID = window.location.href.split('/').at(5);
const instructorID = window.location.href.split('/').at(4);

useEffect(()=>{
  axios
  .get(`http://localhost:9000/instructor/CanViewVideos/${ID}/${instructorID}`)
  .then( res => {
      console.log(res)
      setInstructor(res.data)
  })
  .catch(err=>{console.log(err)})
},[])


// console.log(ID)
useEffect(()=>{
    axios
    .get(`http://localhost:9000/instructor/viewVideos/${ID}`)
    .then( res => {
        console.log(res)
        setVideos(res.data)
    })
    .catch(err=>{console.log(err)})
},[])


useEffect(()=>{
    axios
    .get(`http://localhost:9000/instructor/viewPreview/${ID}`)
    .then( res => {
        console.log(res)
        setPreview(res.data)
    })
    .catch(err=>{console.log(err)})
},[])

if(JSON.stringify(instructor).length==2){
    // console.log(JSON.stringify(instructor).length+" instructor ");
    // console.log(instructorID+" instructor id from url");
    
    return(
        <div>
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

export default ViewVideos 

