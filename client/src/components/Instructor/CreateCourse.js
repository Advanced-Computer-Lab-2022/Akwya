import { useState } from 'react'
import Swal from "sweetalert2";


//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const CreateACourse = () => {
    console.log("here")

  const [title, setTitle] = useState('')
  const [subtitles, setSubtitles] = useState('')
  const [price, setPrice] = useState('')
  const [summary, setSummary] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const course = {title, subtitles, price, summary}
    

    const respnse= await fetch('/course/', {
        method: 'POST',
        body: JSON.stringify(course) ,
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    console.log("hhh")
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
          })  
        setError(null)
        setTitle('')
        setSubtitles('')
        setPrice('')
        setSummary('')

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
        type="subtitles" 
        onChange={(e) => setSubtitles(e.target.value)} 
        value={subtitles}
      required/>
        <br/>

        <br/>
      <label>Price:</label>
      <input 
        type="price" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
      required/>
        <br/>

        <br/>
      <label>Summary:</label>
      <input 
        type="summary" 
        onChange={(e) => setSummary(e.target.value)} 
        value={summary}
      required/>
        <br/>


      <button>Add New Course</button>
      {error && <div className="error">{error}</div>}
    </form>
)
}

export default CreateACourse