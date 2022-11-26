
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
categories: ['Math', 'Science', 'Technology', 'Sports', 'History', 'Misc'],
categoryVal: 'Math', 
mustBeSignedin: false, 
questions: [],
addQuestion: false, 
questionName:'',
answers: [], 
correctAnswer:''
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
    let question = {
        answers: this.state.answers,
        correctAnswer: this.state.answers[this.state.correctAnswer], 
        questionName: this.state.questionName}

        this.setState({
        questions: this.state.questions.concat(question),
        addQuestion: false, 
        questionName:'',
        answers: [], 
        correctAnswer:''
        });
}

removeQuestion = () => {
    this.setState ({
        questions: this.state.questions.filter(ques=>ques.questionName!==ques.questionName)
    })
}

saveQuiz = () => {
    let quizz = {
        mustBeSignedIn:this.state.mustBeSignedin,
        name:this.state.name,
        questions: this.state.questions,
        category: this.state.categoryVal,


        answers: this.state.answers, 
        
        correctAnswer: this.state.answers[this.state.correctAnswer], 
        questionName: this.state.questionName}




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
return (
   
    <div className="create-quiz-wrapper">
        
<div className='main'>
    <div className='header'>Create a Quiz</div>
<div className='form card'>
            <input className='input' onChange={e=>this.setState({name:e.target.value})} value={this.state.name} placeholder="Quiz Name"/>
            <br></br>
            <select value={this.state.categoryVal} onChange={e=>this.setState({categoryVal:e.target.value})} className="input select" placeholder="Category">
                {this.state.categories.map((cat,idx)=>(
                    <option key={idx} value={cat}>{cat}</option>
                ))}
            </select>
            
    {this.state.questions.map((ques,idx)=>(
        <div className="question" key={idx}>
            <div>{ques.questionName}</div>
            <div>Correct Answer:{ques.correctAnswer}</div>
            <div>Number of Answers:{ques.answers.length}</div>
            <span className='btn delete' onClick={()=>this.removeQuestion(ques)}>delete</span>
        </div>
    ))
    }

    

    <div className="questions">
            <div className='add-question' onClick={()=>this.setState({addQuestion: true})}>Add Question</div>
        </div>
            
    <span onClick={()=>this.saveQuiz()} className='btn save-quiz'>Save Quiz</span>

<QuizDialog model={this.state.addQuestion}>
<div className='new-question-form'>
    <input className='input' placeholder='Question' value={this.state.questionName} onChange={e=>this.setState({questionName: e.target.value})}/>
    <div>Answers</div>
    

        <div>
                <input type='radio' value={"0"} onChange={e=>{this.setState({correctAnswer:e.target.value});console.log(e.target.value);}} name="answer"/>
                <input className="input" type="text" placeholder="Answer" value={this.state.answers[0]} onChange={e=>this.updateAnswer(e,0)}/>
        </div>     
        
        <div>
                <input type='radio' value={"1"} onChange={e=>{this.setState({correctAnswer:e.target.value});console.log(e.target.value);}} name="answer"/>                
                <input className="input" type="text" placeholder="Answer" value={this.state.answers[1]} onChange={e=>this.updateAnswer(e,1)}/>
        </div>   

        <div>       
                <input type='radio' value={"2"} onChange={e=>{this.setState({correctAnswer:e.target.value});console.log(e.target.value);}} name="answer"/>
                <input className="input" type="text" placeholder="Answer" value={this.state.answers[2]} onChange={e=>this.updateAnswer(e,2)}/>
        </div>

        <div>
                <input type='radio' value={"3"} onChange={e=>{this.setState({correctAnswer:e.target.value});console.log(e.target.value);}}name="answer"/>
                <input className="input" type="text" placeholder="Answer" value={this.state.answers[3]} onChange={e=>this.updateAnswer(e,3)}/>
        </div>
       

        <div className='btn-wrapper'>
            <div className='btn' onClick={()=>this.setState({addQuestion:false})}>close </div>
            <div className='btn' onClick={()=>this.saveQuestion()}>Save</div>
        </div>

        </div>
    </QuizDialog>
    </div>
    </div>
    </div>


)


}



}