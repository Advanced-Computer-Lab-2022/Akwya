import { useState } from 'react'
import Swal from "sweetalert2";


//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const CreateACourse = () => {
    console.log("here")

  const [title, setTitle] = useState('')
  const [subtitles, setSubtitles] = useState('')
  const [price, setPrice] = useState('')
  const [summary, setSummary] = useState('')
  const [totalHours, setTotalHours] = useState('')
  const [rating, setRating] = useState(0)
  const [error, setError] = useState(null)
  const [id, setId] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()


    const course = {title, subtitles, price, summary,totalHours,rating:0}

    
    const id = window.location.href
    const respnse= await fetch(id, {
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
        console.log("new course added")
        Swal.fire({
            title: 'New Course added!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })  
        setError(null)
        setTitle('')
        setSubtitles('')
        setPrice('')
        setSummary('')
        setTotalHours('')
        

    } 
}


  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Course</h3>

      <label>Course Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        required
      />
        <br/>
      <label>Subtitles:</label>
      <input 
        type="text" 
        onChange={(e) => setSubtitles(e.target.value)} 
        value={subtitles}
      required/>
        <br/>

        <br/>
      <label>Price:</label>
      <input 
        type="number" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
      required/>
        <br/>

        <br/>
      <label>Summary:</label>
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

      <button>Add New Course</button>
      {error && <div className="error">{error}</div>}
    </form>
)
}

export default CreateACourse