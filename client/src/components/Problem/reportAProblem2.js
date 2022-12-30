
 import './reportAProblem.css'
 import React, {useState, useEffect} from 'react'
 import ProblemDialog from '../problemDialog/ProblemDialog.js';
 import axios from 'axios';
 import { Checkbox } from '@mui/material';
 import Swal from "sweetalert2";
import { getValue } from '@mui/system';
 

 const reportAProblem2= (props) => { 

  const func =  async (e) => {


    
  }


 
 return (
    
     
      

      Swal.fire({

        title: "How Can We Help You?",
        html:
      '<h3>Choose an area </h3>'+
      '<select id="swal-input1" name="cars"> <option value="Technical">Technical Issue</option> <option value="Financial">Financial Issue</option> <option value="Other">Other</option></select>'+
      '<br></br>'+
      '<h3>Details</h3>'+


      '<input id="swal-input2" class="swal2-input" >',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    },

    confirmButtonColor: '#38a53e',
    confirmButtonText: 'Submit',
    closeOnConfirm: false,
    showCancelButton: true,

      }).then(async(result) =>{



        if(document.getElementById('swal-input2').value!==""){

            // setStatus('Unresolved');
            // setCategory(document.getElementById('swal-input1').value);
            // setTheProblem(document.getElementById('swal-input2').value);

            // console.log(status);
            console.log(document.getElementById('swal-input1').value);
            console.log(document.getElementById('swal-input2').value);

            // console.log(theProblem);
            // console.log(categoryVal);


            let prob = {

              status:'unseen',
              category:document.getElementById('swal-input1').value,
              theProblem:document.getElementById('swal-input2').value,
              ownerID: window.location.href.split('/').at(4),
              courseid:window.location.href.split('/').at(5)



          }


            await axios.post('/course/report', {prob}).then(res=>{
                Swal.fire({
                    title: 'Your report has been submitted!',
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

        }else {
        
          // Swal.fire({
          //   title: 'Missing input!',
          //   confirmButtonText: 'OK'
          // })
        } 


    
      })    


    
 
 )
 
 
 
 }

 export default reportAProblem2 
