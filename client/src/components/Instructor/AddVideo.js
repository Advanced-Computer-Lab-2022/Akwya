import Swal from "sweetalert2";
import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const AddVideo = () => { 


const _idInstructor = window.location.href.split('/').at(4);
const _idCourse = window.location.href.split('/').at(5);

  const [previewVideo, setPreview] = useState('')
  const [url, setURL] = useState('')
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [totalHours, setTotalHours] = useState(0)

  const [error, setError] = useState(null)


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


  const handleSubmit = async (e) => {
    e.preventDefault()


    const course = {title, url,summary,totalHours}

    
    const id = window.location.href.split('/').at(5);
    const respnse= await fetch(`http://localhost:9000/instructor/addVideo/${id}`, {
        method: 'POST',
        body: JSON.stringify(course) ,
        headers: {
            'Content-Type' : 'application/json'
        }
    })
      
  
    const json= await respnse.json()

    

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("new video added")
        Swal.fire({
            title: 'New Video added!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })  
        setError(null)
        setURL('')
        setTitle('')
        

    } 
}

const handleSubmit2 = async (e) => {
    e.preventDefault()


    
    const id = window.location.href.split('/').at(5);
    const respnse= await fetch(`http://localhost:9000/instructor/addPreview/${id}`, {
        method: 'POST',
        body: JSON.stringify({previewVideo}) ,
        headers: {
            'Content-Type' : 'application/json'
        }
    })
      
  
    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("new video added")
        Swal.fire({
            title: 'New Preview Video added!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })  
        setError(null)
        setPreview('')

        

    } 
}


if(JSON.stringify(instructor).length==2){
    // console.log(JSON.stringify(instructor).length+" instructor ");
    // console.log(instructorID+" instructor id from url");
    
    return(
      <div>
        <h2>You are not the instructor of this course.</h2>
      </div>
    )
}

  return (

  
    <div class='admin allganb' style={{height:'500px',marginTop:'0px',padding:'5px',background:'rgb(240,240,240)', display: "flex","justify-content": "space-between"
  }}>
       
            
   
    <div class="ganb"> 
    <form className="create" onSubmit={handleSubmit2}> 
      <div class="txt_field">
        <h3>Add a New Preview Video</h3> 
        <div class="txt_field">
        <input 
          type="text" 
          onChange={(e) => setPreview(e.target.value)} 
          value={previewVideo}
        required/>
          <br/>
          <label>URL: </label>
          </div>
          </div>
        <button>Add</button>
        {error && <div className="error">{error}</div>}
      </form>
      </div>

 

        <div class="ganb"> 
<form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Video</h3>

      <div class="txt_field">
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        required
      />      <label>Video Subtitle: </label>

      </div>


        <div class="txt_field">
      <input 
        type="text" 
        onChange={(e) => setURL(e.target.value)} 
        value={url}
      required/>      <label>URL: </label>

      </div>
      

        <div class="txt_field">
      <input 
        type="text" 
        onChange={(e) => setSummary(e.target.value)} 
        value={summary}
      required/>        <label>Short Summary: </label>

      </div>

        <div class="txt_field">       
      <input 
        type="number" 
        onChange={(e) => setTotalHours(e.target.value)} 
        value={totalHours}
      required/>        <label>Total Hours: </label>

      </div>
      <button>Add</button>
      {error && <div className="error">{error}</div>}
    </form>
</div>

   

    </div>



)
}

export default AddVideo