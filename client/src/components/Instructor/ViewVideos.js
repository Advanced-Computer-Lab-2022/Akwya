// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'

function ViewVideos(props) {
const [videos,setVideos] = useState([])

const ID = window.location.href.split('/').at(5);
console.log(ID)
useEffect(()=>{
    axios
    .get(`http://localhost:9000/instructor/viewVideos/${ID}`)
    .then( res => {
        console.log(res)
        setVideos(res.data)
    })
    .catch(err=>{console.log(err)})
},[])

let rate = 1;
let currency = 'GBP'
switch(props.country) {
    case 'United States':
      rate = 1.15;
      currency = 'USD';
      break;
    case 'Egypt (‫مصر‬‎)':
    // case 'Egypt':
      rate=27.85;
      currency = 'EGP';
      break;
    default:
      // rate = 3;
  }

return(
    <div>
        <h1>Course Content</h1>
        <ul>

            {/* {videos.map(video => <li key={video._id}>Title: {video.title} Price: {(Math.round(video.price * rate) + ' ' + currency)} Total Hours: {video.totalHours} Rating: {video.rating} Summary: {video.summary}</li>)} */}
            {videos.map(video => <div><h1>{video.title}:</h1><h3>Total Hours: {video.totalHours}</h3><iframe width="700" height="350" src={'https://www.youtube.com/embed/'+video.url.split('=').at(1)} title={video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br/><small>summary: {video.summary}</small></div>)}
           

            

        </ul>
        

    </div>
)
}

export default ViewVideos 

