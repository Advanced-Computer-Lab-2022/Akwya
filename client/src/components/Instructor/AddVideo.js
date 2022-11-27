import Swal from "sweetalert2";
import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

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
    
    return;
}

  return (
    <div>
    <form className="create" onSubmit={handleSubmit2}> 
      <h3>Add a New Preview Video</h3>

      <label>URL:</label>
      <input 
        type="text" 
        onChange={(e) => setPreview(e.target.value)} 
        value={previewVideo}
      required/>
        <br/>

      <button>Add New Preview Video</button>
      {error && <div className="error">{error}</div>}
    </form>
    
<form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Video</h3>

      <label>Video Subtitle:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        required
      />
        <br/>
      <label>URL:</label>
      <input 
        type="text" 
        onChange={(e) => setURL(e.target.value)} 
        value={url}
      required/>
        <br/>

        <label>Short Summary:</label>
      <input 
        type="text" 
        onChange={(e) => setSummary(e.target.value)} 
        value={summary}
      required/>
        <br/>
        
        <label>Total Hours:</label>
      <input 
        type="number" 
        onChange={(e) => setTotalHours(e.target.value)} 
        value={totalHours}
      required/>
        <br/>

      <button>Add New Video</button>
      {error && <div className="error">{error}</div>}
    </form>

    <Link to={{pathname:"/instructor/"+_idInstructor+"/"+_idCourse+"/Quiz"}}>
            <h2>Create A Quiz</h2>
          </Link>

    </div>



)
}

export default AddVideo