import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

import ViewAnswer from '../components/TakeAQuiz/ViewAnswer.js'
import ViewGrade from '../components/TakeAQuiz/ViewGrade.js'



import TakeAQuiz from '../components/TakeAQuiz/TakeAQuiz.js'



const DoneWithMyQuiz = (props) => {

 
 
    return (

    
        <div>   
    
    <div className="takeQuiz">
        <h2>Quiz Time</h2>
          <Link to="/">
              <h2>Go to Home Page</h2>
            </Link>
    
            <ViewAnswer/>            
    
    
    
         </div>
         
    
         
         </div>
    
    
    
    
         
    
        
      )}
      
      export default DoneWithMyQuiz