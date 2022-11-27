import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

import CreateAQuiz from '../components/CreateQuiz/CreateAQuiz.js'





const Quiz = (props) => {

 
  return (

    
    <div>   

    <div className="createQuiz">
    <h2>Quiz Page</h2>
      <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>

        
        <CreateAQuiz/>


     </div>
     

     
     </div>




     

    
  )}
  
  export default Quiz