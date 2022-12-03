import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
// import { Component } from 'react';



//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
function TakeAQuiz() {
  
  const [Quizzes,setQuizzes] = useState([])
  //[name,questions[qName,answer[[],[],[],[] ],correctanswer, chosenanswer   ]]
  const [ShowIt, setShow]= useState(true);
  const CourseID = window.location.href.split('/').at(4);
  const [show,setShowGrade] = useState(false)
  const [grade,setGrade] = useState('')


  const [correctAnswerr,setCorrectAnswer] = useState(0)
  const [chosenAnswerr,setChosenAnswer] = useState(0)


    useEffect(()=>{
      axios
      .get('http://localhost:9000/Quiz/TakeQuiz/'+CourseID)
      .then( res => {
         // console.log(res)
          setQuizzes(res.data)
      })
      .catch(err=>{console.log(err)})
    },[])


    const handleQuestionSubmit = async (quizIndex) => {
      

      
        let tempQuiz=Quizzes[quizIndex]

        


            axios.post('http://localhost:9000/Quiz/TakeQuiz/submitQuiz', tempQuiz).then(res=>{
              console.log(tempQuiz)


              Swal.fire({
                  title: 'Question Submitted!',
                  icon: 'success',
                  confirmButtonColor: '#38a53e',
                  confirmButtonText: 'OK'
                }).then((result) => {
                  if (result.isConfirmed) {
                    // window.location.reload();

                  }
                })
          }).catch(er=>{
              console.error(er);
          })
            // console.log((Quizzes[quizIndex]));


        // axios
        // .get('http://localhost:9000/Quiz/TakeQuiz/viewQuestionGrade/'+CourseID+'/'+questionIndex)
        // .then( res => {
        //    // console.log(res)
        //    console.log((res.data))
        //    setGrade(res.data);
        //    setShow(true)
        // })
        // .catch(err=>{console.log(err)})

    }


    

return(
  <div>
      <h1>Take Quiz</h1>
      <ul>
      {Quizzes.map((quiz,quizIndex) => <li key={quiz._id}>
            
            <div id="myDIV" className="quiz name" >
            <div >Quiz Name: {quiz.name}</div>
            </div>



            <form id={quizIndex}  key={quizIndex} className="question"  onSubmit={(e)=>{
              e.preventDefault();
              // setShow(false);
              // setShowGrade(true);
              document.getElementById(quizIndex).hidden = true;

              handleQuestionSubmit(quizIndex)}}>
              
                {
                    quiz.questions.map((ques,questionIndex)=>(

                      // <div className={questionIndex} key={questionIndex} style={{display: ShowIt ? 'block' : 'none' }}>

                    <div className={questionIndex} key={questionIndex}>
                        <div>Question:{ques.questionName}</div>
                        
                        <form className="answers">

                        {ques.answers.map((ans,answerIndex)=>(
                        <div>
                           

                         <input type='radio' value={ans}
                         
                        onChange={()=>{
                          let updatedQuizzes=[...Quizzes]
                          updatedQuizzes[quizIndex].questions[questionIndex].chosenAnswer=ans
                          setQuizzes(updatedQuizzes)

                        }}
                         
                         name="answer"/>
                          Answer: {ans}
                        
                        </div>
                        

                        ))}
                        </form>

 

                    </div>
                    
                ))
                }

                    



                  <button>Submit</button>

                  
                
            </form>

            
            
            
            </li>)}
         
      </ul>
      {/* <button hidden>View Grade</button>
      <h1 style={{display: show ? 'block' : 'none' }}>You Scored:{grade}</h1> */}

      {/* <button>View Grade</button>
      <h1>You Scored:{grade}</h1> */}


      <Link to={{pathname:"/user/"+CourseID+"/TakeQuiz/Done"}}>
            <h2>Done With My Quiz</h2>
          </Link>
  </div>
)
}

  export default TakeAQuiz 
