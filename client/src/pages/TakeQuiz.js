import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';  

import TakeAQuiz from '../components/TakeAQuiz/TakeAQuiz.js'





const TakeQuiz = (props) => {

 
  return (

    
    <div style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>   

<div className="takeQuiz">

      <Link to="/">
        </Link>

        
        <TakeAQuiz/>



     </div>
     

     
     </div>




     

    
  )}
  
  export default TakeQuiz