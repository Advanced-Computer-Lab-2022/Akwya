
 import './reportAProblem.css'
 import React, { useEffect } from 'react';
 import ProblemDialog from '../problemDialog/ProblemDialog.js';
 import axios from 'axios';
 import { Checkbox } from '@mui/material';
 import Swal from "sweetalert2";
  
  
 export default class reportAProblem extends React.Component {
 constructor (props) {
 super (props);
 this.state ={
 status:"",
 ownerID:[],
 courseid:[],
 categories: ['Technical', 'Financial', 'Other'],
 categoryVal: '', 
 theProblem:"",

 } 
 } 
 
 saveQuestion = () => {
    //  if( this.state.questionName==='' ||this.state.answers.length!==4 ||this.state.correctAnswer===''){
    //      Swal.fire({
    //          title: 'Missing Input!',
    //          icon: 'error',
    //          confirmButtonColor: '#38a53e',
    //          confirmButtonText: 'OK',
    //          confirmButtonColor: '#380000'
 
             
    //        }).then((result) => {
    //          if (result.isConfirmed) {
    //            window.location.reload();
    //          }
    //        })
 
    //  }else{
         let question = {

            status:"unresolved",
            ownerID:window.location.href.split('/').at(4),
            courseid:window.location.href.split('/').at(5),
            category:this.state.categoryVal,
            problem:this.state.theProblem

         }
     
             this.setState({
             questions: this.state.questions.concat(question),
             addQuestion: false, 
             questionName:'',
             answers: [], 
             correctAnswer:'',
             chosenAnswer:''
     
             });
    //  }
     
 }
 
 render(){
 return (
    
     <div className="report-problem-wrapper">
         
 <div className='main'>
     <div className='header'>Create a Quiz</div>
 <div className='form card'>
 <ProblemDialog model={this.state.addQuestion}>
 <div className='new-question-form'>
    
 <select value={this.state.categoryVal} onChange={e=>this.setState({categoryVal:e.target.value})} className="input select" placeholder="Category">
                 {this.state.categories.map((cat,idx)=>(
                     <option key={idx} value={cat}>{cat}</option>
                 ))}
             </select>

     <input className='input' placeholder='type your Problem here' value={this.state.theProblem} onChange={e=>this.setState({theProblem: e.target.value})}/>
     
         <div className='btn-wrapper'>
             <div className='btn' onClick={()=>this.setState({addQuestion:false})}>close </div>
             <div className='btn' onClick={()=>this.saveQuestion()}>Save</div>
         </div>
 
         </div>
     </ProblemDialog>
     </div>
     </div>
     </div>
 
 
 )
 
 
 }
 
 
 
 }