import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
// import { Component } from 'react';
import './quiz.css'
import styledd from "styled-components";
import ViewGrade from './ViewGrade.js'


 
//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
function TakeAQuiz() {

const types = ['Beginner', 'Intermediate', 'Advanced'];
const [showBeginner, setshowBeginner] = useState(false);
const [showIntermediate, setIntermediate] = useState(false);
const [showAdvanced, setshowAdvanced] = useState(false);
const [active, setActive] = useState(types[1]);

  
const Tab = styledd.button`
  padding: 10px 100px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  :hover {opacity: 1;  transition: ease opacity 300ms;}
  :not(:hover) {opacity: 0.6; transition: ease opacity 250ms;}
  ${({ active }) =>
    active &&
    `
  border-bottom: 3px solid black;
  opacity: 1;
`}
`;

  const [Quizzes,setQuizzes] = useState([])
  const [Quizzes1,setQuizzes1] = useState([])

  const CourseID = window.location.href.split('/').at(5);
  const TraineeID = window.location.href.split('/').at(4);
  const [showGrade,setShowGrade] = useState(true);
  
  const [grade,setGrade] = useState(0);

  const [questionIndexx,setTheQuestionIndex] = useState('');
  const [quizIndexx,setTheQuizIndex] = useState('');

  const [level,setLevel] = useState('');


  const [reset,setReset] = useState(false);


  const [gradee,setGradee] = useState('')
  const [show,setShow] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()



      axios
      .get('http://localhost:9000/Quiz/TakeQuiz/viewGrade/'+CourseID+'/'+level)
      .then( res => {
         console.log(level)
         console.log((res.data))

         setGradee(res.data);
         setShow(true);
      })
      .catch(err=>{console.log(err)})
}


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
                  confirmButtonText: 'View Grade'
                }).then((result) => {
                  if (result.isConfirmed) {
                    axios
        .get('http://localhost:9000/Quiz/TakeQuiz/viewQuestionGrade/'+CourseID+'/'+quizIndex)
        .then( res => {
           // console.log(res)
           console.log((res.data))
           setGrade(res.data);
           console.log(showGrade);



           Swal.fire({
            title: 'Your Grade!',
            text:"You Scored " +res.data,
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {

            }
          })


          })
                  }
                })
          })
          
        

    }//end handle submit


    function TabGroup() {
      return (
        <>
          <div style={{ "text-align": "center",marginBottom:"10px" }}>
            {types.map((type) => (
              <Tab
                key={type}
                active={active === type}
    
                onClick={() => {setActive(type);


                      
            axios.post('http://localhost:9000/Quiz/TakeQuiz/resetQuiz/'+CourseID).then(res=>{
             console.log((res.data))


             
            //  setQuizzes([])
            //  setShowGrade(true)
            //  setGrade(true)
            //  setTheQuestionIndex('')
            //  setTheQuizIndex('')
         




             Swal.fire({
              title: 'Your reset!',
              text:"You reset " +res.data,
              icon: 'success',
              confirmButtonColor: '#38a53e',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.isConfirmed) {
        
              }
            })
        
        
            });
                  
                  
                  switch (type) {
                  case "Beginner":
                    setshowBeginner(true);
                    setIntermediate(false);
                    setshowAdvanced(false);
                    setLevel('Beginner')
                    setShow(false);
                    // setQuizzes(Quizzes1)
                    setReset(true)



                    
                  break;
                  case "Intermediate":
                    setshowBeginner(false);
                    setIntermediate(true);
                    setshowAdvanced(false);
                    setLevel('Intermediate')
                    setShow(false);
                    // setQuizzes(Quizzes1)
                    setReset(true)

    
                    
                  break;
                  case "Advanced":
                    setshowBeginner(false);
                    setIntermediate(false);
                    setshowAdvanced(true);
                    setLevel('Advanced')
                    setShow(false);
                    // setQuizzes(Quizzes1)
                    setReset(true)

                    
                    break;
            
                  default:
                    break;
                }}}
              >
                {type}
              </Tab>
            ))}
          </div>
        </>
      );
    }

    

return(
  <div class='quiz'>
      <h1>Take Quiz</h1>
      <TabGroup />

      <ul>
      {Quizzes.map((quiz,quizIndex) => {
       if(quiz.level==='Beginner' && showBeginner) {
        return(
          <ul key={quiz._id}>
                <form id={quizIndex}  key={quizIndex} className="question"  onSubmit={(e)=>{
                  e.preventDefault();
                  handleQuestionSubmit(quizIndex)     
                  setShowGrade(false);
            var y=document.getElementsByClassName('correctAnswer'+quizIndex);
   
            for (let index = 0; index < y.length; index++) {
              y[index].hidden=false;

      }  
                  }}>
    
                    {
                        quiz.questions.map((ques,questionIndex)=>(
                        <div className={questionIndex} key={questionIndex}>    
                            <div>Question:{ques.questionName}</div>                             
                            <form className="answers">
                            {ques.answers.map((ans,answerIndex)=>(
                            <div >
                             <input type='radio' value={ans}

                            onChange={()=>{
                              let updatedQuizzes=[...Quizzes]
                              let updatedQuizzes1=[...Quizzes]

                              updatedQuizzes[quizIndex].questions[questionIndex].chosenAnswer=ans
                          
                              console.log('old'+questionIndex)
                              console.log('old'+quizIndex)
    
                              setQuizzes(updatedQuizzes)
                              setQuizzes1(updatedQuizzes1)
                              setTheQuizIndex(quizIndex)
                              setTheQuestionIndex(questionIndex)
                             console.log('new'+questionIndexx)
                              console.log('new'+quizIndexx)


                            var y=document.getElementsByClassName('chosenAnswer'+quizIndex+questionIndex);
                            for (let index = 0; index < y.length; index++) {
              
                            
                              y[index].hidden=false
              
                      }

    
                            }}
                             
                             name="answer"/>
                             <input className='babyUnclicakbleButtons' type="button" value= {ans} disabled="disabled"/>
                            
                            </div>
                            
    
    
                            
                            ))}
    
                            <div hidden={true} className={'chosenAnswer'+quizIndex+questionIndex}>chosen Answer:{quiz.questions[questionIndex].chosenAnswer}</div>
                            <div hidden={true} className={'correctAnswer'+quizIndex}>correctAnswer Answer:{quiz.questions[questionIndex].correctAnswer}</div>
    
                            </form>
    
                           
    
                        </div>
                        
                    ))
                    }
    
                      <button class="prbutton">Submit</button>
                      
                      
    

                    
                </form>


                
                </ul>
                
                
                )}

                else if(quiz.level==='Intermediate' && showIntermediate) {
                  return(
                    <ul key={quiz._id}>
                          <form id={quizIndex}  key={quizIndex} className="question"  onSubmit={(e)=>{
                            e.preventDefault();
                            handleQuestionSubmit(quizIndex)     
                            setShowGrade(false);
                      var y=document.getElementsByClassName('correctAnswer'+quizIndex);
             
                      for (let index = 0; index < y.length; index++) {
                      console.log('ana hena')
                        console.log(y[index])
                        y[index].hidden=false;
                        y[index].style={backgroundColor:'green'}

                }  
                            }}>
              
                              {
                                  quiz.questions.map((ques,questionIndex)=>(
                                  <div className={questionIndex} key={questionIndex}>    
                                      <div>Question:{ques.questionName}</div>                             
                                      <form className="answers">
                                      {ques.answers.map((ans,answerIndex)=>(
                                      <div >
                                       <input type='radio' value={ans}
          
                                      onChange={()=>{
                                        let updatedQuizzes=[...Quizzes]
                                        let updatedQuizzes1=[...Quizzes]

                                        updatedQuizzes[quizIndex].questions[questionIndex].chosenAnswer=ans
                                    
                                        console.log('old'+questionIndex)
                                        console.log('old'+quizIndex)
              
                                        setQuizzes(updatedQuizzes)
                                        setQuizzes1(updatedQuizzes1)

              
                                        setTheQuizIndex(quizIndex)
                                        setTheQuestionIndex(questionIndex)
                                       console.log('new'+questionIndexx)
                                        console.log('new'+quizIndexx)
          
          
                                      var y=document.getElementsByClassName('chosenAnswer'+quizIndex+questionIndex);
                                      for (let index = 0; index < y.length; index++) {
                        
                                      
                                        y[index].hidden=false
                        
                                }
          
              
                                      }}
                                       
                                       name="answer"/>
                                       <input className='babyUnclicakbleButtons' type="button" value= {ans} disabled="disabled"/>
                                      
                                      </div>
                                      
              
              
                                      
                                      ))}
              
                                      <div hidden={true} className={'chosenAnswer'+quizIndex+questionIndex}>chosen Answer:{quiz.questions[questionIndex].chosenAnswer}</div>
                                      <div hidden={true} className={'correctAnswer'+quizIndex}>correctAnswer Answer:{quiz.questions[questionIndex].correctAnswer}</div>
              
                                      </form>
              
                                     
              
                                  </div>
                                  
                              ))
                              }
              
                                <button class="prbutton">Submit</button>
                                
                                
              
          
                              
                          </form>
          
          
                          
                          </ul>
                          
                          
                          )}
          

                else if(quiz.level==='Advanced' && showAdvanced) {
                  return(
                    <ul key={quiz._id}>
                          <form id={quizIndex}  key={quizIndex} className="question"  onSubmit={(e)=>{
                            e.preventDefault();
                            handleQuestionSubmit(quizIndex)     
                            setShowGrade(false);
                      var y=document.getElementsByClassName('correctAnswer'+quizIndex);
             
                      for (let index = 0; index < y.length; index++) {
                      console.log('ana hena')
                        console.log(y[index])
                        y[index].hidden=false;
                        y[index].style={backgroundColor:'green'}

                }  
                            }}>
              
                              {
                                  quiz.questions.map((ques,questionIndex)=>(
                                  <div className={questionIndex} key={questionIndex}>    
                                      <div>Question:{ques.questionName}</div>                             
                                      <form className="answers">
                                      {ques.answers.map((ans,answerIndex)=>(
                                      <div >
                                       <input type='radio' value={ans}
          
                                      onChange={()=>{
                                        let updatedQuizzes=[...Quizzes]
                                        let updatedQuizzes1=[...Quizzes]

                                        updatedQuizzes[quizIndex].questions[questionIndex].chosenAnswer=ans
                                    
                                        console.log('old'+questionIndex)
                                        console.log('old'+quizIndex)
              
                                        setQuizzes(updatedQuizzes)
                                        setQuizzes1(updatedQuizzes1)

                                        setTheQuizIndex(quizIndex)
                                        setTheQuestionIndex(questionIndex)
                                       console.log('new'+questionIndexx)
                                        console.log('new'+quizIndexx)
          
          
                                      var y=document.getElementsByClassName('chosenAnswer'+quizIndex+questionIndex);
                                      for (let index = 0; index < y.length; index++) {
                        
                                      
                                        y[index].hidden=false
                        
                                }
          
              
                                      }}
                                       
                                       name="answer"/>
                                       <input className='babyUnclicakbleButtons' type="button" value= {ans} disabled="disabled"/>
                                      
                                      </div>
                                      
              
              
                                      
                                      ))}
              
                                      <div hidden={true} className={'chosenAnswer'+quizIndex+questionIndex}>chosen Answer:{quiz.questions[questionIndex].chosenAnswer}</div>
                                      <div hidden={true} className={'correctAnswer'+quizIndex}>correctAnswer Answer:{quiz.questions[questionIndex].correctAnswer}</div>
              
                                      </form>
              
                                     
              
                                  </div>
                                  
                              ))
                              }
              
                                <button class="prbutton">Submit</button>
                                
                                
              
          
                              
                          </form>
          
          
                          
                          </ul>
                          
                          
                          )}
                  




              } //end
            
            )}

         
      </ul>
  
          <form className="create" onSubmit={handleSubmit}> 
  <div>
      <button>View Total Quiz Grade For This Level</button>
      <h1 style={{display: show ? 'block' : 'none' }}>You Scored:{gradee}</h1>
      
  </div>
  </form>


  </div>
  
)
}

  export default TakeAQuiz 
