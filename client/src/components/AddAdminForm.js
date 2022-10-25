import { useState } from 'react'
import Swal from "sweetalert2";  


const AddAdminForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {username,Fname:"admin",Lname:"admin",Email:"admin", password,gender:"admin",user_type:"admin",country:"egypt"}
    
    // const response = await fetch('/user/', { //needs adjusting
    //   method: 'POST',
    //   body: JSON.stringify(user),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // const json = await response.json()

    // if (!response.ok) {
    //   setError(json.error)
    // alert("Error");

    // }
    // if (response.ok) {
      Swal.fire({
        title: 'New Admin added!',
        icon: 'success',
        confirmButtonColor: '#38a53e',
        confirmButtonText: 'OK'
      }) 
      // Swal.fire('New Admin added!')
      setError(null)
      setUsername('')
      setPassword('')

    //   console.log('new admin added:', json)
    // }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Admin</h3>

      <label>Admin Username:</label>
      <input 
        type="text" 
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

export default AddAdminForm