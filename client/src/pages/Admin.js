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

    document.getElementById('navPages').innerHTML = '<li> <a href="/admin"> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'

    }) 
    return (
        <div class="admin">
        <div class="allganb">

        <AddAdmin />
        <AddInstructor />
        <AddTrainee />
        </div>
        <div class="container">       
         <h5>Feeling generous?  </h5><br/>
          <div style={{display:'flex', marginRight:'50px'}}>
          
        <button style={{flex:'1',margin: '10px'}} class="prbutton" onClick={()=>{window.location='/AdminPromotion'}}><h5>Set Promotions %</h5></button>
      
        <button style={{flex:'1',margin: '10px'}} class="prbutton" onClick={()=>{window.location='/AdminViewTheProblems'}}><h5>View Problems</h5></button>
        <br/>
        
        
        <button style={{flex:'1',margin: '10px'}} class="prbutton" onClick={()=>{window.location='/Refund'}}><h5>Refund Trainee $</h5></button>
        <br/>
        </div>
        <div style={{display:'flex', marginRight:'50px'}}>
        <button style={{flex:'1',margin: '10px'}} class="prbutton" onClick={()=>{window.location='/GrantAccess'}}><h5>Grant Access !</h5></button>
        <br/>
        <button style={{flex:'1',margin: '10px'}} class="prbutton" onClick={()=>{window.location='/RefundRequests'}}><h5>View Refund Requests</h5></button>
      </div>  </div>

      
      

       

      </div>
    )
  }
  
  export default Admin