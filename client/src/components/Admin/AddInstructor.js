import { useState } from 'react'
import Swal from "sweetalert2";
import './admin.css'

//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const AddInstructor = () => {
    // console.log("here")

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const instructor = {username, password,email}
    

    const respnse= await fetch('/admin/newInstructor', {
        method: 'POST',
        body: JSON.stringify(instructor) ,
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("new Instructor added")
        Swal.fire({
            title: 'New Instructor added!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          })  
        setError(null)
        setUsername('')
        setPassword('')
        setEmail('')
        

    } 
}


  return (
    <div class="ganb">
    <form className="create" onSubmit={handleSubmit}> 
      <h1>New Instructor</h1>

      <div class="txt_field">

      <input 
        type="username" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username}
        required
      />
            <label>Username</label>
</div>
      
        <div class="txt_field">
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
      required/>
        <br/>
        <label>Email</label>
</div>
<div class="txt_field">
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      required/>
       <label>Password</label>
</div>

      <button>Add New Instructor</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
)
}

export default AddInstructor