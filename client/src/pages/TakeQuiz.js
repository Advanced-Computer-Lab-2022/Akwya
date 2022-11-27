import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

import TakeAQuiz from '../components/TakeAQuiz/TakeAQuiz.js'





const TakeQuiz = (props) => {

 
  return (

    
    <div>   

<div className="takeQuiz">
    <h2>Quiz Time</h2>
      <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>

        
        <TakeAQuiz/>



     </div>
     

     
     </div>




     

    
  )}
  
  export default TakeQuiz