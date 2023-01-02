
 import './CreateAQuiz.css'
import React, { useEffect } from 'react';
import QuizDialog from '../Dialog/QuizDialog.js';
import axios from 'axios';
import { Checkbox } from '@mui/material';
import Swal from "sweetalert2";


export default class CreateAQuiz extends React.Component {
constructor (props) {
super (props);
this.state ={
instructorID:[],
courseid:[],
categories: ['Beginner', 'Intermediate', 'Advanced'],
levelVal: 'Beginner', 
mustBeSignedin: false, 
questions: [],
addQuestion: false, 
questionName:'',
answers: [], 
correctAnswer:'',
chosenAnswer:'',
deleteBayen: true, 

} 
} 



selectPrivate =e=>{
if (e.target.checked === true) {
    this.setState( {
    mustBeSignedIn: e.target.checked,
});
}
else {
    this.setState ({
    mustBeSignedIn: false});
}
}

addAnswer = () => {
    this.setState ({
        answers: this.state.answers.concat ('')
    })
}
updateAnswer = (e, i) => {
        let newArr = Object.assign([], this.state.answers);
        newArr[i] = e.target.value;
        this.setState({
            answers: newArr
    })
}


saveQuestion = () => {
    if( this.state.questionName==='' ||this.state.answers.length!==4 ||this.state.correctAnswer===''){
        Swal.fire({
            title: 'Missing Input!',
            icon: 'error',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK',
            confirmButtonColor: '#380000'

            
          }).then((result) => {
            if (result.isConfirmed) {
            //   window.location.reload();
            }
          })

    }else{
        let question = {
            answers: this.state.answers,
            correctAnswer: this.state.answers[this.state.correctAnswer], 
            questionName: this.state.questionName,
            chosenAnswer:''
        }
    
            this.setState({
            questions: this.state.questions.concat(question),
            addQuestion: false, 
            questionName:'',
            answers: [], 
            correctAnswer:'',
            chosenAnswer:''
    
            });
    }
    
}

removeQuestion = () => {
    this.setState ({
        questions: this.state.questions.filter(ques=>ques.questionName!==ques.questionName)
    })
}

saveQuiz = () => {

    let quizz = {

        instructorID:window.location.href.split('/').at(4),
        courseid:window.location.href.split('/').at(5),
        mustBeSignedIn:this.state.mustBeSignedin,
        name:this.state.name,
        questions: this.state.questions,
        level: this.state.levelVal,
        chosenAnswer:'',


        answers: this.state.answers, 
        
        correctAnswer: this.state.answers[this.state.correctAnswer], 
        questionName: this.state.questionName
    }

    console.log("question name: "+quizz.questionName)
    console.log("answer length: "+this.state.answers.length)
    console.log("correct Answer: "+quizz.correctAnswer==='')

    if( !this.state.name || this.state.questions.length===0){
        Swal.fire({
            title: 'Missing Quiz Name or Question(s)!',
            icon: 'error',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK',
            confirmButtonColor: '#380000'

            
          }).then((result) => {
            if (result.isConfirmed) {
            //   window.location.reload();
            }
          })
          return;

    }

        axios.post('/Quiz/create', {quizz}).then(res=>{
            Swal.fire({
                title: 'New Quiz added!',
                icon: 'success',
                confirmButtonColor: '#38a53e',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              })
        }).catch(er=>{
            console.error(er);
        })

    





    

        
}

render(){
   const instructorID=window.location.href.split('/').at(4);
      const  courseid=window.location.href.split('/').at(5);
      const backLink="http://localhost:3000/instructor/"+instructorID+'/'+courseid;
return (
   
    <div className="create-quiz-wrapper">
         <div class="bb"><a href={backLink} class="previous round">&#8249;</a></div>
<div className='main'>
    <div className='header'>          
<h2>Create a Quiz</h2></div>
<div className='form card'>
<div> <input className='input' onChange={e=>this.setState({name:e.target.value})} value={this.state.name} placeholder="Quiz Name" required /> </div>
{/* <div>    <input className='input' onChange={e=>this.setState({instructorID:e.target.value})} value={this.state.instructorID} placeholder="Instructor ID" required/> </div>
<div>  <input className='input' onChange={e=>this.setState({courseid:e.target.value})} value={this.state.courseid} placeholder="Course ID" required/> </div> */}

            <br></br>
            <select value={this.state.levelVal} onChange={e=>this.setState({levelVal:e.target.value})} className="input select" placeholder="Level">
                {this.state.categories.map((cat,idx)=>(
                    <option key={idx} value={cat}>{cat}</option>
                ))}
            </select>
            
    {this.state.questions.map((ques,idx)=>(
        <div className="question" key={idx}>
            <div>{ques.questionName}</div>
            <div>Correct Answer:{ques.correctAnswer}</div>
            <div>Number of Answers:{ques.answers.length}</div>
        </div>
    ))
    }
    
<br/>
<br/>

<span hidden={this.state.deleteBayen} className='btn save-quiz' style={{background:"orangered", padding:5 ,cursor: "pointer"}} onClick={()=>{this.removeQuestion() ; this.setState({deleteBayen: true})}}>Delete Questions</span>


    <div className="questions">
            <div className='add-question' style={{background:"#1976d2"}} onClick={()=>this.setState({addQuestion: true})}>Add A Question</div>
        </div>
            
    <span style={{background:"#1976d2", padding:10,cursor: "pointer"}} onClick={()=>this.saveQuiz()} className='btn save-quiz'>Save Quiz</span>

<QuizDialog model={this.state.addQuestion}>
<div className='new-question-form'>
    <input className='input' placeholder='Question' value={this.state.questionName} onChange={e=>this.setState({questionName: e.target.value})}/>
    <div>Answers</div>
    <form>
                <input type='radio' value={"0"} onChange={e=>{this.setState({correctAnswer:e.target.value});console.log(e.target.value);}} name="answer"/>
                <input className="input" type="text" placeholder="Answer" value={this.state.answers[0]} onChange={e=>this.updateAnswer(e,0)} required/>
                <br/>
        
                <input type='radio' value={"1"} onChange={e=>{this.setState({correctAnswer:e.target.value});console.log(e.target.value);}} name="answer" />                
                <input className="input" type="text" placeholder="Answer" value={this.state.answers[1]} onChange={e=>this.updateAnswer(e,1)} required/>
                <br/>

 
                 <input type='radio' value={"2"} onChange={e=>{this.setState({correctAnswer:e.target.value});console.log(e.target.value);}} name="answer"/>
                <input className="input" type="text" placeholder="Answer" value={this.state.answers[2]} onChange={e=>this.updateAnswer(e,2)} required/>
                <br/>

                <input type='radio' value={"3"} onChange={e=>{this.setState({correctAnswer:e.target.value});console.log(e.target.value);}}name="answer"/>
                <input className="input" type="text" placeholder="Answer" value={this.state.answers[3]} onChange={e=>this.updateAnswer(e,3)} required/>
                <br/>
  
                </form>
        <div className='btn-wrapper'>
            <div className='btn' style={{background:"orangered", padding:3,margin:5,cursor: "pointer"}} onClick={()=>this.setState({addQuestion:false})}>Close </div>
            <div className='btn' style={{background:"#1976d2", padding:3,margin:5,cursor: "pointer"}} onClick={()=> {this.setState({deleteBayen: false}) ;this.saveQuestion()}}>Save</div>
        </div>

        </div>
    </QuizDialog>
    </div>
    </div>
    </div>


)


}



}