import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
function TakeAQuiz() {
  const [search, setSearch] = useState(``);
  const [error, setError] = useState(null)
  const [Quizzes,setQuizzes] = useState([])


    
    const id = window.location.href.split('/').at(4);
    console.log(id)
    
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
      <h1>Take Quiz</h1>
      <ul>
          {Quizzes.map(quiz => <li key={quiz._id}>
            
            <div className="quiz name">
            <div>Quiz Name: {quiz.name}</div>
            </div>

            <form className="question">
              
                {
                  quiz.questions.map((ques,idx)=>(

                    <div className="question" key={idx}>
                        <div>Question:{ques.questionName}</div>
                        
                        <form className="answers">

                        {quiz.questions[idx].answers.map((ans,idxx)=>(
                        <div>
                         <input type='radio' value={idxx} onChange={e=>{this.setState({chosenAnswer:e.target.value})}} name="answer"/>
                          Answer: {ans[idxx]}
                        
                        </div>

                        ))}
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

  export default TakeAQuiz 
