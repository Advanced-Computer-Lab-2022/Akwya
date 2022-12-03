import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";



function ViewGrade() {
  
  const CourseID = window.location.href.split('/').at(4);


  const [grade,setGrade] = useState('')
  const [show,setShow] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()



      axios
      .get('http://localhost:9000/Quiz/TakeQuiz/viewGrade/'+CourseID)
      .then( res => {
         // console.log(res)
         console.log((res.data))
         setGrade(res.data);
         setShow(true)
      })
      .catch(err=>{console.log(err)})
}



return(
    <form className="create" onSubmit={handleSubmit}> 
  <div>
      <button>View Total Quiz Grade</button>
      <h1 style={{display: show ? 'block' : 'none' }}>You Scored:{grade}</h1>
      
  </div>
  </form>

    
)
}

  export default ViewGrade 
