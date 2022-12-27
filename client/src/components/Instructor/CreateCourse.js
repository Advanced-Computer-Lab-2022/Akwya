import { useState } from 'react'
import Swal from "sweetalert2";


//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const CreateACourse = () => {

  const [title, setTitle] = useState('')
  const [subtitles, setSubtitles] = useState('') 
  const [price, setPrice] = useState('')
  const [summary, setSummary] = useState('')
  const [totalHours, setTotalHours] = useState('')
  const [subject, setSubject] = useState('')
  const [rating, setRating] = useState(0)
  const [error, setError] = useState(null)
  const [id, setId] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()


    const course = {title, subtitles, price, summary,totalHours,rating:0,subject}

    
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
        setSubject('')
        

    } 
}


  return (
    <div class='admin allganb' style={{height:'700px',marginTop:'0px',padding:'5px',background:'rgb(240,240,240)'}}>

    <div class="ganb"> 

    <form className="create" onSubmit={handleSubmit}> 
      <h1>New Course</h1>
      <div class="txt_field">

      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        required
      />
            <label>Course Title</label>
</div>
    
        <div class="txt_field">

      {/* <input 
        type="text" 
        onChange={(e) => setSubtitles(e.target.value)} 
        value={subtitles}
      required/>
            <label>Subtitles</label>

      </div>

        <div class="txt_field"> */}

      
      <input 
        type="number" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
      required/> <label>Price</label></div>
      
        <div class="txt_field">

      <input 
        type="text" 
        onChange={(e) => setSummary(e.target.value)} 
        value={summary}
      required/>      <label>Summary</label>
      </div>
      
        <div class="txt_field">

      <input 
        type="number" 
        onChange={(e) => setTotalHours(e.target.value)} 
        value={totalHours}
      required/>        <label>Total Hours</label>
      </div>
       
        <div class="txt_field">

      <input 
        type="text" 
        onChange={(e) => setSubject(e.target.value)} 
        value={subject}
      required/>        <label>Subject</label>
      </div>
       

      <button>Add New Course</button>
      {error && <div className="error">{error}</div>}
    </form>

    </div></div>
)
}

export default CreateACourse