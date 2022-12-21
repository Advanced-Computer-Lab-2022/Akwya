import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
// import { Component } from 'react';



//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
function ViewAnswer() {
  
  const [Quizzes,setQuizzes] = useState([])
  const [ShowIt, setShow]= useState(true);


    
    const id = window.location.href.split('/').at(5);
    
    useEffect(()=>{
      axios
      .get('http://localhost:9000/Quiz/TakeQuiz/'+id)
      .then( res => {
          console.log(res)
          setQuizzes(res.data)
      })
      .catch(err=>{console.log(err)})
    },[])




return(
  <div>
      <h1>View Answers</h1>
      <ul>
          {Quizzes.map(quiz => <li key={quiz._id}>
            
            <div id="myDIV" className="quiz name" >
            <div >Quiz Name: {quiz.name}</div>
            </div>


            {/* <form id="myForm" className="question" style={{display: this.state.ShowIt ? 'block' : 'none' }}> */}

            <form id="myForm" className="question">
              
                {
                  quiz.questions.map((ques,idx)=>(

                    <div className="question" key={idx} >
                        <div>Question:{ques.questionName}</div>
                        
                        <form className="answers">

                        {quiz.questions[idx].answers.map((ans,idxx)=>(
                        <div>
             
                          {idxx+')   '+ ans}
                        
                        </div>
                        

                        

                        ))}
                        <div>chosen Answer:{quiz.questions[idx].chosenAnswer}</div>
                        <div>correctAnswer:{quiz.questions[idx].correctAnswer}</div>

                        </form>

                    </div>
                    
                ))
                }


                
            </form>

            
            
            
            </li>)}
         
      </ul>
      
  </div>
)
}

  export default ViewAnswer 
