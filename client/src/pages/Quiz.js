import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';  

import CreateAQuiz from '../components/CreateQuiz/CreateAQuiz.js'



 

const Quiz = (props) => {

 
  return (

    
    <div style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>   

    <div className="createQuiz">
      <Link to="/">
        </Link>

        
        <CreateAQuiz/>


     </div>
     

     
     </div>




     

    
  )}
  
  export default Quiz