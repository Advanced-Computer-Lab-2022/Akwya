import { Link } from 'react-router-dom'
import AddAdmin from '../components/Admin/AddAdmin'
import AddTrainee from '../components/Admin/AddCorporateTrainee'
import AddInstructor from '../components/Admin/AddInstructor'
import Refund from '../components/Admin/RefundTrainee'
import React, { useState, useEffect } from 'react';  


const Admin = () => {
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = false
    document.getElementById('loginbutton').hidden = true
    document.getElementById('contract').hidden = true

    })
    return (
        <div class="admin">
        <div class="allganb">

        <AddAdmin />
        <AddInstructor />
        <AddTrainee />
        </div>
        <div class="container">       
         <h5>Feeling generous?  </h5>
         <div style={{display: "flex","justify-content": "space-between","max-width": "420px"}}>
        <button class="prbutton" onClick={()=>{window.location='/AdminPromotion'}}><h5>Set Promotions %</h5></button>
        <button class="prbutton" onClick={()=>{window.location='/AdminViewTheProblems'}}><h5>View Problems</h5></button>
        </div>
        <button class="prbutton" onClick={()=>{window.location='/Refund'}}><h5>Refund Trainee $</h5></button>
        <br/>
        <button class="prbutton" onClick={()=>{window.location='/GrantAccess'}}><h5>Grant Access !</h5></button>


        </div>
      

       

      </div>
    )
  }
  
  export default Admin