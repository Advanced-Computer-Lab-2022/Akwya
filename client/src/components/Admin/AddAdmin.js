import { useState } from 'react'
import Swal from "sweetalert2";


//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const AddAdmin = () => {
    // console.log("here")

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const admin = {username, password}
    

    const respnse= await fetch('/admin/newAdmin', {
        method: 'POST',
        body: JSON.stringify(admin) ,
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("new admin added")
        Swal.fire({
            title: 'New admin added!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          })  
        setError(null)
        setUsername('')
        setPassword('')
        

    } 
}


  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Admin</h3>

      <label>Username:</label>
      <input 
        type="username" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username}
        required
      />
        <br/>
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      required/>
        <br/>


      <button>Add New Admin</button>
      {error && <div className="error">{error}</div>}
    </form>
)
}

export default AddAdmin