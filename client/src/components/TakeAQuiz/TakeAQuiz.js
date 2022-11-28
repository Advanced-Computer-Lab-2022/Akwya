import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
// import { Component } from 'react';



//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
function TakeAQuiz() {
  
  const [Quizzes,setQuizzes] = useState([])
  const [ShowIt, setShow]= useState(true);
  const CourseID = window.location.href.split('/').at(4);

  const [quizIndex, setQuizIndex] = useState(0)
  const [questionIndex, setQuestions] = useState(0)
  const [chosenAnswers, setAnswers] = useState('')
 


    
    // const id = window.location.href.split('/').at(4);
    
    useEffect(()=>{
      axios
      .get('http://localhost:9000/Quiz/TakeQuiz/'+CourseID)
      .then( res => {
          console.log(res)
          setQuizzes(res.data)
      })
      .catch(err=>{console.log(err)})
    },[])


    const handleQuestionSubmit = async () => {
 
      const feinElAnswer = [quizIndex,questionIndex,chosenAnswers]
      console.log(feinElAnswer)
      Swal.fire({
          title: 'Question Submitted!',
          icon: 'success',
          confirmButtonColor: '#38a53e',
          confirmButtonText: 'OK',
          
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
        
    
    
          //   await axios.post('/TakeQuiz/submitChosen',{feinElAnswer} ).then(
          //  (res) => { 
          //      console.log("tmm")
               
          //  }
          //   );
          
        

    }



return(
  <div>
      <h1>Take Quiz</h1>
      <ul>
          {Quizzes.map(quiz => <li key={quiz._id} > 
            
            <div id="myDIV" className="quiz name" >
            <div >Quiz Name: {quiz.name}</div>
            </div>


            {/* <form id="myForm" className="question" style={{display: this.state.ShowIt ? 'block' : 'none' }}> */}

            <form id="myForm" className="question">
              
                {
                  
                  // quiz.questions.map((ques,idx)=>{setQuestions(idx)(
                    quiz.questions.map((ques,idx)=>(

                    <div className="question" key={idx} >
                        <div>Question:{ques.questionName}</div>
                        
                        <form className="answers">
                        {/* {quiz.questions[idx].answers.map((ans,idxx)=>{setAnswers(idxx)&&( */}

                        {quiz.questions[idx].answers.map((ans,idxx)=>(
                        <div>
                          <input type='radio' value={quiz.questions[idx].answers[idxx]} onChange={e=>{quiz.questions[idx].chosenAnswer=e.target.value;console.log(e.target.value);}}  name="answer"/>
                         

                          {'   '+ ans}
                        
                        </div>
                        

                        ))}
                        </form>

                    </div>
                    
                ))
                }
                  <button onClick={()=>handleQuestionSubmit()} >Submit</button>


                
            </form>

            
            
            {/* </li> && setQuizIndex(quiz._id)})} */}
            
            </li>)}
         
      </ul>
      <Link to={{pathname:"/user/"+CourseID+"/TakeQuiz/Done"}}>
            <h2>Done With My Quiz</h2>
          </Link>
  </div>
)
}

  export default TakeAQuiz 
