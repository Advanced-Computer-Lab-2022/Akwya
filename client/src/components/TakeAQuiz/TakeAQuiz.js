import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
// import { Component } from 'react';



//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
function TakeAQuiz() {
  
  const [Quizzes,setQuizzes] = useState([])
  const CourseID = window.location.href.split('/').at(4);
  const [showGrade,setShowGrade] = useState(false);
  const [grade,setGrade] = useState('');




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


              // Swal.fire({
              //     title: 'Question Submitted!',
              //     icon: 'success',
              //     confirmButtonColor: '#38a53e',
              //     confirmButtonText: 'OK'
              //   }).then((result) => {
              //     if (result.isConfirmed) {
              //       // window.location.reload();

              //     }
              //   })
          }).catch(er=>{
              console.error(er);
          })
            // console.log((Quizzes[quizIndex]));


        axios
        .get('http://localhost:9000/Quiz/TakeQuiz/viewQuestionGrade/'+CourseID+'/'+quizIndex)
        .then( res => {
           // console.log(res)
           console.log((res.data))
           setGrade(res.data);
           console.log(showGrade);



           Swal.fire({
            title: 'Question Submitted!',
            text:"You Scored" +res.data,
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              // window.location.reload();

            }
          })


          })
        .catch(err=>{console.log(err)})

        // document.getElementById(quizIndex+'answer').hidden = false;


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
              document.getElementById(quizIndex).hidden = true;

              handleQuestionSubmit(quizIndex)
              
              setShowGrade(true);

              
              }}>

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

            
            {/* <h1 id={quizIndex+'answer'} style={{display: showGrade ? 'block' : 'none' }}>You Scored:{grade}</h1> */}

            
            </li>)}
         
      </ul>
      {/* <button hidden>View Grade</button>
      <h1 style={{display: show ? 'block' : 'none' }}>You Scored:{grade}</h1> */}

      {/* <button>View Grade</button> */}


      <Link to={{pathname:"/user/"+CourseID+"/TakeQuiz/Done"}}>
            <h2>Done With My Quiz</h2>
          </Link>
  </div>
)
}

  export default TakeAQuiz 
